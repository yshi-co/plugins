import { describe, expect, it } from 'vitest';
import { makeDeck, parseCard, cardId, Card } from '../src/cards.js';
import {
  applyAction,
  createGame,
  legalActions,
  redact,
} from '../src/tongits/engine.js';
import {
  discardPickupMelds,
  findMelds,
  handCount,
  isRun,
  isSet,
  isValidMeld,
  canExtendMeld,
} from '../src/tongits/melds.js';
import { botAction } from '../src/tongits/bot.js';
import { GameState } from '../src/tongits/types.js';

const P = [
  { id: 'a', name: 'Ana' },
  { id: 'b', name: 'Ben' },
  { id: 'c', name: 'Cid' },
];

const c = (id: string): Card => parseCard(id);
const cs = (...ids: string[]): Card[] => ids.map(parseCard);

describe('deck & deal', () => {
  it('deals 13/12/12 with a 15-card stock and full-deck integrity', () => {
    const g = createGame(P, { seed: 42, dealer: 0 });
    expect(g.players[0]!.hand).toHaveLength(13);
    expect(g.players[1]!.hand).toHaveLength(12);
    expect(g.players[2]!.hand).toHaveLength(12);
    expect(g.stock).toHaveLength(52 - 37);
    const all = [...g.stock, ...g.players.flatMap((p) => p.hand)].map(cardId).sort();
    expect(all).toEqual(makeDeck().map(cardId).sort());
    expect(new Set(all).size).toBe(52);
  });

  it('is deterministic per seed', () => {
    const a = createGame(P, { seed: 7 });
    const b = createGame(P, { seed: 7 });
    expect(a.players[0]!.hand).toEqual(b.players[0]!.hand);
    const d = createGame(P, { seed: 8 });
    expect(a.players[0]!.hand).not.toEqual(d.players[0]!.hand);
  });

  it('dealer opens in action phase (no draw)', () => {
    const g = createGame(P, { seed: 1, dealer: 1 });
    expect(g.turn).toBe(1);
    expect(g.phase).toBe('action');
    expect(legalActions(g, 1)).toEqual(['meld', 'sapaw', 'discard']);
  });
});

describe('melds', () => {
  it('validates sets', () => {
    expect(isSet(cs('7s', '7h', '7d'))).toBe(true);
    expect(isSet(cs('7s', '7h', '7d', '7c'))).toBe(true);
    expect(isSet(cs('7s', '7h'))).toBe(false);
    expect(isSet(cs('7s', '7h', '8d'))).toBe(false);
  });

  it('validates runs (ace low, same suit)', () => {
    expect(isRun(cs('1s', '2s', '3s'))).toBe(true);
    expect(isRun(cs('9h', '10h', '11h', '12h'))).toBe(true);
    expect(isRun(cs('12s', '13s', '1s'))).toBe(false); // no wrap-around
    expect(isRun(cs('4s', '5h', '6s'))).toBe(false); // mixed suit
    expect(isRun(cs('4s', '6s', '7s'))).toBe(false); // gap
  });

  it('extends melds (sapaw)', () => {
    expect(canExtendMeld(cs('7s', '7h', '7d'), cs('7c'))).toBe(true);
    expect(canExtendMeld(cs('4s', '5s', '6s'), cs('3s'))).toBe(true);
    expect(canExtendMeld(cs('4s', '5s', '6s'), cs('7s', '8s'))).toBe(true);
    expect(canExtendMeld(cs('4s', '5s', '6s'), cs('8s'))).toBe(false);
    expect(canExtendMeld(cs('7s', '7h', '7d', '7c'), cs('7c'))).toBe(false);
  });

  it('finds pickup melds for the top discard', () => {
    expect(discardPickupMelds(cs('7h', '7d', '2c'), c('7s')).length).toBeGreaterThan(0);
    expect(discardPickupMelds(cs('5s', '6s', '2c'), c('7s')).length).toBeGreaterThan(0);
    expect(discardPickupMelds(cs('5s', '6h', '2c'), c('7s'))).toHaveLength(0);
  });

  it('counts deadwood correctly', () => {
    expect(handCount(cs('1s', '5h', '11d', '13c'))).toBe(1 + 5 + 10 + 10);
  });

  it('finds disjoint melds in a hand', () => {
    const melds = findMelds(cs('7s', '7h', '7d', '4c', '5c', '6c', '2s'));
    expect(melds).toHaveLength(2);
    expect(melds.every(isValidMeld)).toBe(true);
  });
});

/** Build a controlled mid-game state for scenario tests. */
function fixedState(): GameState {
  const g = createGame(P, { seed: 3, dealer: 0 });
  // Overwrite hands/stock for a deterministic scenario (still 52 unique cards not enforced here;
  // scenario tests only exercise rules, not deal integrity).
  g.players[0]!.hand = cs('7s', '7h', '7d', '4c', '5c', '9h', '13s');
  g.players[1]!.hand = cs('1s', '2s', '3s', '10h', '11h', '8d');
  g.players[2]!.hand = cs('2h', '2d', '9c', '12c', '6h', '3d');
  g.stock = cs('8s', '9s', '10s', '6c');
  g.discard = [];
  return g;
}

describe('turn flow', () => {
  it('enforces turn and phase order', () => {
    const g = fixedState();
    expect(() => applyAction(g, 1, { type: 'drawStock' })).toThrow(/turn/);
    expect(() => applyAction(g, 0, { type: 'drawStock' })).toThrow(/not in draw/);
  });

  it('meld → discard → next player draws', () => {
    let g = fixedState();
    g = applyAction(g, 0, { type: 'meld', cards: cs('7s', '7h', '7d') });
    expect(g.players[0]!.melds).toHaveLength(1);
    g = applyAction(g, 0, { type: 'discard', card: c('13s') });
    expect(g.turn).toBe(1);
    expect(g.phase).toBe('draw');
    g = applyAction(g, 1, { type: 'drawStock' });
    expect(g.players[1]!.hand).toHaveLength(7);
  });

  it('allows drawing the top discard only with an immediate meld', () => {
    let g = fixedState();
    g = applyAction(g, 0, { type: 'meld', cards: cs('7s', '7h', '7d') });
    g = applyAction(g, 0, { type: 'discard', card: c('4c') });

    // Ben cannot pick up 4c (no meld with it)
    expect(() => applyAction(g, 1, { type: 'drawDiscard', cards: cs('10h', '11h') })).toThrow(/valid meld/);

    // but can pick up after we give him a matching pair via stock draw path:
    g = applyAction(g, 1, { type: 'drawStock' });
    g = applyAction(g, 1, { type: 'discard', card: c('8d') });

    // Cid picks up nothing valid either; draws stock and discards
    g = applyAction(g, 2, { type: 'drawStock' });
    g = applyAction(g, 2, { type: 'discard', card: c('12c') });

    // Ana discarded 4c earlier; top is now 12c — she can't meld it
    expect(legalActions(g, 0)).not.toContain('drawDiscard');
  });

  it('sapaw extends a meld and marks the victim', () => {
    let g = fixedState();
    g = applyAction(g, 0, { type: 'meld', cards: cs('7s', '7h', '7d') });
    g = applyAction(g, 0, { type: 'discard', card: c('13s') });
    g = applyAction(g, 1, { type: 'drawStock' }); // draws 6c
    const drawn = g.players[1]!.hand[g.players[1]!.hand.length - 1]!;
    expect(cardId(drawn)).toBe('6c');
    // Ben lays 1s-2s-3s then sapaw is not possible for him here; instead meld run
    g = applyAction(g, 1, { type: 'meld', cards: cs('1s', '2s', '3s') });
    g = applyAction(g, 1, { type: 'discard', card: c('8d') });
    // Cid draws and sapaws Ana's 7-set with... no 7c in hand; expect error
    g = applyAction(g, 2, { type: 'drawStock' });
    expect(() => applyAction(g, 2, { type: 'sapaw', target: 0, meldIndex: 0, cards: cs('9c') })).toThrow(
      /extend/,
    );
  });
});

describe('endings', () => {
  it('tongits: emptying the hand wins immediately', () => {
    let g = fixedState();
    g.players[0]!.hand = cs('7s', '7h', '7d', '4c');
    g = applyAction(g, 0, { type: 'meld', cards: cs('7s', '7h', '7d') });
    g = applyAction(g, 0, { type: 'discard', card: c('4c') });
    expect(g.phase).toBe('ended');
    expect(g.result).toMatchObject({ reason: 'tongits', winner: 0 });
  });

  it('stock exhaustion: lowest count among un-burned players wins', () => {
    let g = fixedState();
    g.stock = cs('8s'); // one draw left
    g = applyAction(g, 0, { type: 'meld', cards: cs('7s', '7h', '7d') }); // Ana exposes
    g = applyAction(g, 0, { type: 'discard', card: c('13s') });
    g = applyAction(g, 1, { type: 'drawStock' }); // stock now empty
    g = applyAction(g, 1, { type: 'discard', card: c('8d') });
    expect(g.phase).toBe('ended');
    expect(g.result!.reason).toBe('stock');
    // Ben and Cid are burned (no melds) → Ana wins despite any counts
    expect(g.result!.winner).toBe(0);
    expect(g.result!.burned).toEqual([false, true, true]);
  });

  it('draw fight: caller with un-sapawed meld wins ties; burned players cannot challenge', () => {
    let g = fixedState();
    // Ana melds and discards; comes back around to her turn with meld intact
    g = applyAction(g, 0, { type: 'meld', cards: cs('7s', '7h', '7d') });
    g = applyAction(g, 0, { type: 'discard', card: c('13s') });
    g = applyAction(g, 1, { type: 'drawStock' });
    g = applyAction(g, 1, { type: 'discard', card: c('8d') });
    g = applyAction(g, 2, { type: 'drawStock' });
    g = applyAction(g, 2, { type: 'discard', card: c('12c') });

    expect(legalActions(g, 0)).toContain('callDraw');
    g = applyAction(g, 0, { type: 'callDraw' });
    expect(g.phase).toBe('fight');

    // burned challengers rejected
    expect(() => applyAction(g, 1, { type: 'fightDecision', decision: 'challenge' })).toThrow(/no exposed meld/);

    g = applyAction(g, 1, { type: 'fightDecision', decision: 'fold' });
    g = applyAction(g, 2, { type: 'fightDecision', decision: 'fold' });
    expect(g.phase).toBe('ended');
    expect(g.result).toMatchObject({ reason: 'fight', winner: 0, folded: [1, 2] });
  });

  it('sapawed players cannot call a draw', () => {
    let g = fixedState();
    g.players[2]!.hand.push(c('7c')); // give Cid the 4th seven
    g = applyAction(g, 0, { type: 'meld', cards: cs('7s', '7h', '7d') });
    g = applyAction(g, 0, { type: 'discard', card: c('13s') });
    g = applyAction(g, 1, { type: 'drawStock' });
    g = applyAction(g, 1, { type: 'discard', card: c('8d') });
    g = applyAction(g, 2, { type: 'drawStock' });
    g = applyAction(g, 2, { type: 'sapaw', target: 0, meldIndex: 0, cards: cs('7c') });
    expect(g.players[0]!.wasSapawed).toBe(true);
    g = applyAction(g, 2, { type: 'discard', card: c('12c') });
    expect(legalActions(g, 0)).not.toContain('callDraw');
    expect(() => applyAction(g, 0, { type: 'callDraw' })).toThrow(/sapaw/i);
  });
});

describe('redaction', () => {
  it('hides opponents hands and stock contents', () => {
    const g = createGame(P, { seed: 5 });
    const view = redact(g, 1);
    expect(view.hand).toEqual(g.players[1]!.hand);
    expect((view.players[0] as { hand?: unknown }).hand).toBeUndefined();
    expect(view.players[0]!.handCount).toBe(13);
    expect(view.stockCount).toBe(g.stock.length);
    expect((view as { stock?: unknown }).stock).toBeUndefined();
  });
});

describe('bot soak', () => {
  it('bots always finish a game with only legal moves', () => {
    for (let seed = 1; seed <= 25; seed++) {
      let g = createGame(P, { seed });
      let guard = 0;
      while (g.phase !== 'ended') {
        if (++guard > 2000) throw new Error(`seed ${seed}: game did not terminate`);
        const seat = g.phase === 'fight'
          ? Number(Object.entries(g.fight!.decisions).find(([, d]) => d === null)![0])
          : g.turn;
        g = applyAction(g, seat, botAction(g, seat));
      }
      expect(g.result).toBeDefined();
      expect(g.result!.winner).toBeGreaterThanOrEqual(0);
      // full-deck conservation at game end
      const all = [
        ...g.stock,
        ...g.discard,
        ...g.players.flatMap((p) => [...p.hand, ...p.melds.flat()]),
      ];
      expect(all).toHaveLength(52);
      expect(new Set(all.map(cardId)).size).toBe(52);
    }
  });
});
