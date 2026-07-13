import { Card, cardValue } from '../cards.js';
import { canCallDraw, legalActions } from './engine.js';
import { discardPickupMelds, findMelds, handCount, canExtendMeld } from './melds.js';
import { Action, GameState } from './types.js';

/**
 * Practice bot: plays legal, reasonable Tongits. Not strong — meant for the
 * local/offline mode and for soak-testing the engine.
 */
export function botAction(state: GameState, seat: number): Action {
  const legal = legalActions(state, seat);
  const player = state.players[seat]!;

  if (legal.includes('fightDecision')) {
    const challenge = player.melds.length > 0 && handCount(player.hand) <= 15;
    return { type: 'fightDecision', decision: challenge ? 'challenge' : 'fold' };
  }

  if (state.phase === 'draw') {
    if (canCallDraw(state, seat) && handCount(player.hand) <= 8) return { type: 'callDraw' };
    const top = state.discard[state.discard.length - 1];
    if (top && legal.includes('drawDiscard')) {
      const options = discardPickupMelds(player.hand, top);
      if (options.length > 0) return { type: 'drawDiscard', cards: options[0]! };
    }
    return { type: 'drawStock' };
  }

  // action phase: expose melds, then lay off, then discard the worst card
  const melds = findMelds(player.hand);
  // keep at least one card to discard (can't end the turn otherwise unless it's tongits)
  const meldable = melds.find((m) => player.hand.length - m.length >= 1 || player.hand.length === m.length);
  if (meldable) return { type: 'meld', cards: meldable };

  for (const card of player.hand) {
    if (player.hand.length === 1) break; // keep the discard
    for (let target = 0; target < state.players.length; target++) {
      const tp = state.players[target]!;
      for (let mi = 0; mi < tp.melds.length; mi++) {
        if (canExtendMeld(tp.melds[mi]!, [card])) {
          return { type: 'sapaw', target, meldIndex: mi, cards: [card] };
        }
      }
    }
  }

  // discard: highest-value card not part of a potential meld
  const keep = new Set(findMelds(player.hand).flat());
  const candidates = player.hand.filter((c) => !keep.has(c));
  const pool = candidates.length > 0 ? candidates : player.hand;
  const worst = pool.reduce((a, b) => (cardValue(b) > cardValue(a) ? b : a));
  return { type: 'discard', card: worst };
}

export type { Card };
