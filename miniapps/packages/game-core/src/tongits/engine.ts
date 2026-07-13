import { Card, makeDeck, removeCards, sameCard } from '../cards.js';
import { mulberry32, shuffle } from '../rng.js';
import { canExtendMeld, discardPickupMelds, handCount, isValidMeld } from './melds.js';
import { Action, GameError, GameResult, GameState, SeatView } from './types.js';

export const PLAYERS = 3;
const DEAL = [12, 12, 12]; // dealer receives one extra card

export interface CreateOptions {
  seed: number;
  dealer?: number;
}

export function createGame(players: { id: string; name: string }[], opts: CreateOptions): GameState {
  if (players.length !== PLAYERS) throw new GameError('bad_players', `tongits needs exactly ${PLAYERS} players`);
  const dealer = opts.dealer ?? 0;
  const rand = mulberry32(opts.seed);
  const deck = shuffle(makeDeck(), rand);

  const hands: Card[][] = [[], [], []];
  let cursor = 0;
  for (let seat = 0; seat < PLAYERS; seat++) {
    const n = DEAL[seat]! + (seat === dealer ? 1 : 0);
    hands[seat] = deck.slice(cursor, cursor + n);
    cursor += n;
  }

  return {
    game: 'tongits',
    seed: opts.seed,
    dealer,
    turn: dealer,
    // The dealer has 13 cards and opens without drawing.
    phase: 'action',
    stock: deck.slice(cursor),
    discard: [],
    players: players.map((p, seat) => ({
      id: p.id,
      name: p.name,
      hand: hands[seat]!,
      melds: [],
      wasSapawed: false,
    })),
    version: 0,
  };
}

function topDiscard(state: GameState): Card | undefined {
  return state.discard[state.discard.length - 1];
}

function burnedFlags(state: GameState): boolean[] {
  return state.players.map((p) => p.melds.length === 0);
}

/**
 * Resolve a count-based ending among `participants` (seat indexes).
 * Burned players are excluded unless everyone in the pool is burned.
 * Ties go to the seat closest to `anchor` in turn order (anchor itself first).
 */
function resolveByCount(state: GameState, participants: number[], anchor: number): { winner: number; counts: number[] } {
  const counts = state.players.map((p) => handCount(p.hand));
  const burned = burnedFlags(state);
  let pool = participants.filter((s) => !burned[s]);
  if (pool.length === 0) pool = participants;
  const distance = (s: number) => (s - anchor + PLAYERS) % PLAYERS;
  const winner = pool.reduce((best, s) => {
    if (counts[s]! < counts[best]!) return s;
    if (counts[s]! === counts[best]! && distance(s) < distance(best)) return s;
    return best;
  });
  return { winner, counts };
}

function endGame(state: GameState, result: GameResult): void {
  state.phase = 'ended';
  state.result = result;
  state.fight = undefined;
}

function endTurn(state: GameState, seat: number): void {
  const player = state.players[seat]!;
  player.wasSapawed = false; // the "since your last turn" window restarts
  if (player.hand.length === 0) {
    endGame(state, { reason: 'tongits', winner: seat, burned: burnedFlags(state) });
    return;
  }
  state.turn = (seat + 1) % PLAYERS;
  state.phase = 'draw';
  if (state.stock.length === 0) {
    const { winner, counts } = resolveByCount(state, [0, 1, 2], state.turn);
    endGame(state, { reason: 'stock', winner, counts, burned: burnedFlags(state) });
  }
}

function checkTongits(state: GameState, seat: number): boolean {
  if (state.players[seat]!.hand.length === 0) {
    endGame(state, { reason: 'tongits', winner: seat, burned: burnedFlags(state) });
    return true;
  }
  return false;
}

export function canCallDraw(state: GameState, seat: number): boolean {
  const p = state.players[seat]!;
  return state.phase === 'draw' && state.turn === seat && p.melds.length > 0 && !p.wasSapawed;
}

export function applyAction(prev: GameState, seat: number, action: Action): GameState {
  if (prev.phase === 'ended') throw new GameError('ended', 'game is over');
  const state: GameState = structuredClone(prev);
  state.version++;
  const player = state.players[seat];
  if (!player) throw new GameError('bad_seat', `no seat ${seat}`);

  if (action.type === 'fightDecision') {
    if (state.phase !== 'fight' || !state.fight) throw new GameError('bad_phase', 'no fight in progress');
    if (seat === state.fight.caller || !(seat in state.fight.decisions))
      throw new GameError('bad_seat', 'not a fight responder');
    if (state.fight.decisions[seat] !== null) throw new GameError('already_decided', 'decision already made');
    if (action.decision === 'challenge' && player.melds.length === 0)
      throw new GameError('burned', 'a player with no exposed meld cannot challenge');
    state.fight.decisions[seat] = action.decision;

    const pending = Object.values(state.fight.decisions).some((d) => d === null);
    if (!pending) {
      const caller = state.fight.caller;
      const challengers = Object.entries(state.fight.decisions)
        .filter(([, d]) => d === 'challenge')
        .map(([s]) => Number(s));
      const folded = Object.entries(state.fight.decisions)
        .filter(([, d]) => d === 'fold')
        .map(([s]) => Number(s));
      const { winner, counts } = resolveByCount(state, [caller, ...challengers], caller);
      endGame(state, { reason: 'fight', winner, counts, burned: burnedFlags(state), folded });
    }
    return state;
  }

  if (state.turn !== seat) throw new GameError('not_your_turn', `it is seat ${state.turn}'s turn`);

  switch (action.type) {
    case 'callDraw': {
      if (!canCallDraw(state, seat))
        throw new GameError('cannot_call', 'need an exposed, un-sapawed meld at the start of your turn');
      state.phase = 'fight';
      state.fight = {
        caller: seat,
        decisions: Object.fromEntries(
          [0, 1, 2].filter((s) => s !== seat).map((s) => [s, null]),
        ) as Record<number, 'challenge' | 'fold' | null>,
      };
      return state;
    }

    case 'drawStock': {
      if (state.phase !== 'draw') throw new GameError('bad_phase', 'not in draw phase');
      const card = state.stock.pop();
      if (!card) throw new GameError('empty_stock', 'stock is empty');
      player.hand.push(card);
      state.phase = 'action';
      return state;
    }

    case 'drawDiscard': {
      if (state.phase !== 'draw') throw new GameError('bad_phase', 'not in draw phase');
      const top = topDiscard(state);
      if (!top) throw new GameError('empty_discard', 'discard pile is empty');
      if (action.cards.length < 2) throw new GameError('bad_meld', 'need at least 2 hand cards to pick up');
      if (!isValidMeld([top, ...action.cards]))
        throw new GameError('bad_meld', 'top discard + cards is not a valid meld');
      player.hand = removeCards(player.hand, action.cards);
      state.discard.pop();
      player.melds.push([top, ...action.cards]);
      state.phase = 'action';
      if (checkTongits(state, seat)) return state;
      return state;
    }

    case 'meld': {
      if (state.phase !== 'action') throw new GameError('bad_phase', 'draw first');
      if (!isValidMeld(action.cards)) throw new GameError('bad_meld', 'not a valid set or run');
      player.hand = removeCards(player.hand, action.cards);
      player.melds.push(action.cards);
      checkTongits(state, seat);
      return state;
    }

    case 'sapaw': {
      if (state.phase !== 'action') throw new GameError('bad_phase', 'draw first');
      const target = state.players[action.target];
      if (!target) throw new GameError('bad_seat', `no seat ${action.target}`);
      const meld = target.melds[action.meldIndex];
      if (!meld) throw new GameError('bad_meld', 'no such meld');
      if (!canExtendMeld(meld, action.cards)) throw new GameError('bad_meld', 'cards do not extend the meld');
      player.hand = removeCards(player.hand, action.cards);
      target.melds[action.meldIndex] = [...meld, ...action.cards];
      if (action.target !== seat) target.wasSapawed = true;
      checkTongits(state, seat);
      return state;
    }

    case 'discard': {
      if (state.phase !== 'action') throw new GameError('bad_phase', 'draw first');
      player.hand = removeCards(player.hand, [action.card]);
      state.discard.push(action.card);
      endTurn(state, seat);
      return state;
    }

    default:
      throw new GameError('bad_action', `unknown action`);
  }
}

/** Summarized legal action types for UI enablement. */
export function legalActions(state: GameState, seat: number): Action['type'][] {
  if (state.phase === 'ended') return [];
  if (state.phase === 'fight') {
    return state.fight && seat !== state.fight.caller && state.fight.decisions[seat] === null
      ? ['fightDecision']
      : [];
  }
  if (state.turn !== seat) return [];
  if (state.phase === 'draw') {
    const out: Action['type'][] = [];
    if (canCallDraw(state, seat)) out.push('callDraw');
    if (state.stock.length > 0) out.push('drawStock');
    const top = topDiscard(state);
    if (top && discardPickupMelds(state.players[seat]!.hand, top).length > 0) out.push('drawDiscard');
    return out;
  }
  return ['meld', 'sapaw', 'discard'];
}

/** Redact hidden information for one seat. */
export function redact(state: GameState, seat: number): SeatView {
  return {
    seat,
    turn: state.turn,
    phase: state.phase,
    stockCount: state.stock.length,
    discard: state.discard,
    hand: state.players[seat]!.hand,
    players: state.players.map((p) => ({
      id: p.id,
      name: p.name,
      handCount: p.hand.length,
      melds: p.melds,
      wasSapawed: p.wasSapawed,
    })),
    fight: state.fight,
    result: state.result,
    version: state.version,
  };
}

export { handCount, discardPickupMelds, isValidMeld, canExtendMeld } from './melds.js';
export { sameCard };
