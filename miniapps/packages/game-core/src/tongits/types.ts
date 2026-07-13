import { Card } from '../cards.js';

export type Phase = 'draw' | 'action' | 'fight' | 'ended';

export interface PlayerState {
  /** Stable player id (Yshi user uuid in prod, anything in dev). */
  id: string;
  name: string;
  hand: Card[];
  /** Exposed melds on the table. */
  melds: Card[][];
  /** True if another player sapawed one of this player's melds since their last turn. */
  wasSapawed: boolean;
}

export interface FightState {
  caller: number;
  /** seat -> decision; only non-caller seats present. */
  decisions: Record<number, 'challenge' | 'fold' | null>;
}

export type EndReason = 'tongits' | 'stock' | 'fight';

export interface GameResult {
  reason: EndReason;
  winner: number;
  /** Final deadwood counts per seat (present for stock/fight endings). */
  counts?: number[];
  /** Seats that were burned (no exposed meld) at game end. */
  burned: boolean[];
  /** Seats that folded in a fight ending. */
  folded?: number[];
}

export interface GameState {
  game: 'tongits';
  seed: number;
  dealer: number;
  turn: number;
  phase: Phase;
  stock: Card[];
  discard: Card[];
  players: PlayerState[];
  fight?: FightState;
  result?: GameResult;
  /** Monotonic action counter (concurrency guard / replay cursor). */
  version: number;
}

export type Action =
  | { type: 'callDraw' }
  | { type: 'drawStock' }
  /** Take the top discard; `cards` are the hand cards it melds with (exposed immediately). */
  | { type: 'drawDiscard'; cards: Card[] }
  | { type: 'meld'; cards: Card[] }
  | { type: 'sapaw'; target: number; meldIndex: number; cards: Card[] }
  | { type: 'discard'; card: Card }
  | { type: 'fightDecision'; decision: 'challenge' | 'fold' };

/** Per-seat view with hidden information redacted. */
export interface SeatView {
  seat: number;
  turn: number;
  phase: Phase;
  stockCount: number;
  discard: Card[];
  hand: Card[];
  players: {
    id: string;
    name: string;
    handCount: number;
    melds: Card[][];
    wasSapawed: boolean;
  }[];
  fight?: FightState;
  result?: GameResult;
  version: number;
}

export class GameError extends Error {
  constructor(
    public code: string,
    message: string,
  ) {
    super(message);
  }
}
