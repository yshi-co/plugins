/**
 * Wire protocol v1 — JSON messages over WebSocket.
 * Transport-agnostic types shared conceptually with clients (apps duplicate
 * the subset they need to stay bundle-independent).
 */
import type { Action, SeatView } from '@yshi/game-core/tongits';

export interface ClientHello {
  type: 'hello';
  /** Signed Yshi initData; verified when YSHI_BOT_TOKEN is set. */
  initData?: string;
  /** Dev-mode identity when no initData (rejected in prod mode). */
  name?: string;
  /** Reconnect token from a previous `joined` message. */
  seatToken?: string;
}

export type ClientMessage =
  | ClientHello
  | { type: 'create'; game: 'tongits' }
  | { type: 'join'; code: string }
  | { type: 'action'; action: Action; version: number }
  | { type: 'leave' };

export type ServerMessage =
  | { type: 'welcome'; userId: string; name: string }
  | { type: 'created'; code: string }
  | { type: 'joined'; code: string; seat: number; seatToken: string }
  | { type: 'lobby'; code: string; players: { name: string; seat: number }[]; needed: number }
  | { type: 'state'; view: SeatView }
  | { type: 'error'; code: string; message: string };
