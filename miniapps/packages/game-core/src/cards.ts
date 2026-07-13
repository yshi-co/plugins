export type Suit = 's' | 'h' | 'd' | 'c';

/** rank: 1 (Ace) .. 13 (King) */
export interface Card {
  rank: number;
  suit: Suit;
}

export const SUITS: readonly Suit[] = ['s', 'h', 'd', 'c'];
export const SUIT_SYMBOLS: Record<Suit, string> = { s: '♠', h: '♥', d: '♦', c: '♣' };
const RANK_LABELS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export function cardId(c: Card): string {
  return `${c.rank}${c.suit}`;
}

export function parseCard(id: string): Card {
  const suit = id.slice(-1) as Suit;
  const rank = Number(id.slice(0, -1));
  if (!SUITS.includes(suit) || !Number.isInteger(rank) || rank < 1 || rank > 13) {
    throw new Error(`invalid card id: ${id}`);
  }
  return { rank, suit };
}

export function cardLabel(c: Card): string {
  return `${RANK_LABELS[c.rank - 1]}${SUIT_SYMBOLS[c.suit]}`;
}

export function sameCard(a: Card, b: Card): boolean {
  return a.rank === b.rank && a.suit === b.suit;
}

export function makeDeck(): Card[] {
  const deck: Card[] = [];
  for (const suit of SUITS) {
    for (let rank = 1; rank <= 13; rank++) deck.push({ rank, suit });
  }
  return deck;
}

/** Tongits count value: A=1, pips face value, J/Q/K=10. */
export function cardValue(c: Card): number {
  return c.rank > 10 ? 10 : c.rank;
}

/** Remove exactly the given cards from a hand; throws if any is missing. */
export function removeCards(hand: Card[], cards: Card[]): Card[] {
  const rest = hand.slice();
  for (const c of cards) {
    const i = rest.findIndex((h) => sameCard(h, c));
    if (i < 0) throw new Error(`card not in hand: ${cardId(c)}`);
    rest.splice(i, 1);
  }
  return rest;
}
