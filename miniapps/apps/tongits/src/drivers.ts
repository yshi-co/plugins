import {
  Action,
  GameError,
  GameState,
  SeatView,
  applyAction,
  botAction,
  createGame,
  redact,
} from '@yshi/game-core/tongits';

export type DriverEvent =
  | { kind: 'view'; view: SeatView }
  | { kind: 'lobby'; code: string; players: string[]; needed: number }
  | { kind: 'joined'; code: string; seat: number }
  | { kind: 'error'; code: string; message: string };

export interface Driver {
  subscribe(cb: (ev: DriverEvent) => void): void;
  act(action: Action): void;
  close(): void;
}

const BOT_DELAY_MS = 650;

/** Offline practice mode: you are seat 0, two bots play the other seats. */
export class LocalDriver implements Driver {
  private state: GameState;
  private cb: ((ev: DriverEvent) => void) | null = null;
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(playerName: string) {
    this.state = createGame(
      [
        { id: 'you', name: playerName },
        { id: 'bot1', name: 'Bot Kai' },
        { id: 'bot2', name: 'Bot Mia' },
      ],
      { seed: (Math.random() * 0xffffffff) >>> 0, dealer: Math.floor(Math.random() * 3) },
    );
  }

  subscribe(cb: (ev: DriverEvent) => void): void {
    this.cb = cb;
    this.emit();
    this.scheduleBots();
  }

  act(action: Action): void {
    try {
      this.state = applyAction(this.state, 0, action);
      this.emit();
      this.scheduleBots();
    } catch (e) {
      if (e instanceof GameError) this.cb?.({ kind: 'error', code: e.code, message: e.message });
      else throw e;
    }
  }

  close(): void {
    if (this.timer) clearTimeout(this.timer);
    this.cb = null;
  }

  private emit(): void {
    this.cb?.({ kind: 'view', view: redact(this.state, 0) });
  }

  /** Which bot seat must act now, if any. */
  private pendingBot(): number | null {
    if (this.state.phase === 'ended') return null;
    if (this.state.phase === 'fight') {
      const pending = Object.entries(this.state.fight!.decisions).find(
        ([seat, d]) => d === null && Number(seat) !== 0,
      );
      return pending ? Number(pending[0]) : null;
    }
    return this.state.turn !== 0 ? this.state.turn : null;
  }

  private scheduleBots(): void {
    if (this.timer) clearTimeout(this.timer);
    const seat = this.pendingBot();
    if (seat === null) return;
    this.timer = setTimeout(() => {
      const s = this.pendingBot();
      if (s === null) return;
      this.state = applyAction(this.state, s, botAction(this.state, s));
      this.emit();
      this.scheduleBots();
    }, BOT_DELAY_MS);
  }
}

/** Online mode against the room server (server/). */
export class NetDriver implements Driver {
  private ws: WebSocket;
  private cb: ((ev: DriverEvent) => void) | null = null;
  private lastVersion = 0;

  constructor(
    url: string,
    private opts: { name: string; initData?: string; create?: boolean; code?: string },
  ) {
    this.ws = new WebSocket(url);
    this.ws.onopen = () => {
      this.send({ type: 'hello', name: opts.name, initData: opts.initData });
      if (opts.create) this.send({ type: 'create', game: 'tongits' });
      else if (opts.code) this.send({ type: 'join', code: opts.code });
    };
    this.ws.onmessage = (e) => {
      const msg = JSON.parse(String(e.data));
      switch (msg.type) {
        case 'joined':
          this.cb?.({ kind: 'joined', code: msg.code, seat: msg.seat });
          break;
        case 'lobby':
          this.cb?.({
            kind: 'lobby',
            code: msg.code,
            players: msg.players.map((p: { name: string }) => p.name),
            needed: msg.needed,
          });
          break;
        case 'state':
          this.lastVersion = msg.view.version;
          this.cb?.({ kind: 'view', view: msg.view });
          break;
        case 'error':
          this.cb?.({ kind: 'error', code: msg.code, message: msg.message });
          break;
      }
    };
    this.ws.onclose = () => this.cb?.({ kind: 'error', code: 'closed', message: 'connection lost' });
  }

  subscribe(cb: (ev: DriverEvent) => void): void {
    this.cb = cb;
  }

  act(action: Action): void {
    this.send({ type: 'action', action, version: this.lastVersion });
  }

  close(): void {
    this.cb = null;
    this.ws.close();
  }

  private send(msg: unknown): void {
    this.ws.send(JSON.stringify(msg));
  }
}
