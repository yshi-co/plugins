import { randomBytes } from 'node:crypto';
import {
  Action,
  GameError,
  GameState,
  PLAYERS,
  applyAction,
  createGame,
  redact,
} from '@yshi/game-core/tongits';

export interface Seat {
  userId: string;
  name: string;
  seatToken: string;
  /** Callback to push a message to the connected socket (null when disconnected). */
  send: ((msg: unknown) => void) | null;
}

export class Room {
  readonly code: string;
  readonly seats: Seat[] = [];
  state: GameState | null = null;

  constructor(code: string) {
    this.code = code;
  }

  get full(): boolean {
    return this.seats.length >= PLAYERS;
  }

  join(userId: string, name: string, send: (msg: unknown) => void): { seat: number; seatToken: string } {
    const existing = this.seats.findIndex((s) => s.userId === userId);
    if (existing >= 0) {
      // rejoin — rebind the socket
      this.seats[existing]!.send = send;
      return { seat: existing, seatToken: this.seats[existing]!.seatToken };
    }
    if (this.full) throw new GameError('room_full', 'room is full');
    if (this.state) throw new GameError('in_progress', 'game already started');
    const seatToken = randomBytes(16).toString('hex');
    this.seats.push({ userId, name, seatToken, send });
    if (this.full) this.start();
    return { seat: this.seats.length - 1, seatToken };
  }

  rebind(seatToken: string, send: (msg: unknown) => void): number {
    const seat = this.seats.findIndex((s) => s.seatToken === seatToken);
    if (seat < 0) throw new GameError('bad_token', 'unknown seat token');
    this.seats[seat]!.send = send;
    return seat;
  }

  disconnect(userId: string): void {
    const seat = this.seats.find((s) => s.userId === userId);
    if (seat) seat.send = null;
  }

  start(): void {
    this.state = createGame(
      this.seats.map((s) => ({ id: s.userId, name: s.name })),
      { seed: randomBytes(4).readUInt32LE(0), dealer: Math.floor(Math.random() * PLAYERS) },
    );
    this.broadcastState();
  }

  act(seat: number, action: Action, version: number): void {
    if (!this.state) throw new GameError('not_started', 'game not started');
    if (version !== this.state.version)
      throw new GameError('stale', `state changed (client v${version}, server v${this.state.version})`);
    this.state = applyAction(this.state, seat, action);
    this.broadcastState();
  }

  broadcastState(): void {
    if (!this.state) return;
    this.seats.forEach((s, seat) => {
      s.send?.({ type: 'state', view: redact(this.state!, seat) });
    });
  }

  broadcastLobby(): void {
    const msg = {
      type: 'lobby',
      code: this.code,
      players: this.seats.map((s, seat) => ({ name: s.name, seat })),
      needed: PLAYERS - this.seats.length,
    };
    this.seats.forEach((s) => s.send?.(msg));
  }
}

export class RoomRegistry {
  private rooms = new Map<string, Room>();

  create(): Room {
    let code: string;
    do {
      code = randomBytes(3).toString('hex').toUpperCase();
    } while (this.rooms.has(code));
    const room = new Room(code);
    this.rooms.set(code, room);
    return room;
  }

  get(code: string): Room | undefined {
    return this.rooms.get(code.toUpperCase());
  }

  /** Drop finished/abandoned rooms (call periodically). */
  sweep(): void {
    for (const [code, room] of this.rooms) {
      const abandoned = room.seats.every((s) => s.send === null);
      const finished = room.state?.phase === 'ended';
      if (abandoned || finished) this.rooms.delete(code);
    }
  }
}
