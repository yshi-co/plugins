import { Card, cardValue } from '../cards.js';

/** 3-4 cards of the same rank. */
export function isSet(cards: Card[]): boolean {
  if (cards.length < 3 || cards.length > 4) return false;
  return cards.every((c) => c.rank === cards[0]!.rank);
}

/** 3+ consecutive ranks in one suit (ace low only: A-2-3 ok, Q-K-A not). */
export function isRun(cards: Card[]): boolean {
  if (cards.length < 3) return false;
  const suit = cards[0]!.suit;
  if (!cards.every((c) => c.suit === suit)) return false;
  const ranks = cards.map((c) => c.rank).sort((a, b) => a - b);
  return ranks.every((r, i) => i === 0 || r === ranks[i - 1]! + 1);
}

export function isValidMeld(cards: Card[]): boolean {
  return isSet(cards) || isRun(cards);
}

/** Whether meld ∪ adds is still a valid meld (sapaw / lay-off). */
export function canExtendMeld(meld: Card[], adds: Card[]): boolean {
  if (adds.length === 0) return false;
  return isValidMeld([...meld, ...adds]);
}

/**
 * Find disjoint melds in a hand (greedy: sets first, then maximal runs).
 * Not globally optimal, but good enough for hints and the practice bot.
 */
export function findMelds(hand: Card[]): Card[][] {
  const melds: Card[][] = [];
  let rest = hand.slice();

  // sets
  const byRank = new Map<number, Card[]>();
  for (const c of rest) {
    const g = byRank.get(c.rank) ?? [];
    g.push(c);
    byRank.set(c.rank, g);
  }
  for (const group of byRank.values()) {
    if (group.length >= 3) {
      melds.push(group.slice(0, 4));
      rest = rest.filter((c) => !group.slice(0, 4).includes(c));
    }
  }

  // runs per suit
  for (const suit of ['s', 'h', 'd', 'c'] as const) {
    const inSuit = rest
      .filter((c) => c.suit === suit)
      .sort((a, b) => a.rank - b.rank)
      // dedupe ranks (duplicates impossible in one deck, but be safe)
      .filter((c, i, a) => i === 0 || c.rank !== a[i - 1]!.rank);
    let seq: Card[] = [];
    const flush = () => {
      if (seq.length >= 3) {
        melds.push(seq);
        rest = rest.filter((c) => !seq.includes(c));
      }
      seq = [];
    };
    for (const c of inSuit) {
      if (seq.length === 0 || c.rank === seq[seq.length - 1]!.rank + 1) seq.push(c);
      else {
        flush();
        seq = [c];
      }
    }
    flush();
  }

  return melds;
}

/**
 * All ways to meld the top discard with >=2 hand cards (pickup legality).
 * Returns arrays of HAND cards (the discard completes them).
 */
export function discardPickupMelds(hand: Card[], top: Card): Card[][] {
  const out: Card[][] = [];

  // sets: 2 or 3 hand cards of the same rank
  const sameRank = hand.filter((c) => c.rank === top.rank);
  if (sameRank.length >= 2) {
    out.push(sameRank.slice(0, 2));
    if (sameRank.length >= 3) out.push(sameRank.slice(0, 3));
  }

  // runs: any window of 3..5 consecutive same-suit ranks containing top
  const suited = new Map<number, Card>();
  for (const c of hand) if (c.suit === top.suit) suited.set(c.rank, c);
  for (let len = 3; len <= 5; len++) {
    for (let lo = top.rank - len + 1; lo <= top.rank; lo++) {
      if (lo < 1 || lo + len - 1 > 13) continue;
      const cards: Card[] = [];
      let ok = true;
      for (let r = lo; r < lo + len; r++) {
        if (r === top.rank) continue;
        const c = suited.get(r);
        if (!c) {
          ok = false;
          break;
        }
        cards.push(c);
      }
      if (ok && cards.length >= 2) out.push(cards);
    }
  }

  // dedupe by card-id signature
  const seen = new Set<string>();
  return out.filter((m) => {
    const key = m
      .map((c) => `${c.rank}${c.suit}`)
      .sort()
      .join(',');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Deadwood count of a hand. */
export function handCount(hand: Card[]): number {
  return hand.reduce((sum, c) => sum + cardValue(c), 0);
}
