/**
 * Yshi game server — room-based, server-authoritative.
 *
 * Env:
 *   PORT            (default 8787)
 *   YSHI_BOT_TOKEN  when set, clients MUST present valid signed initData;
 *                   when unset, dev mode accepts a plain `name` in hello.
 */
import { createServer } from 'node:http';
import { WebSocketServer, WebSocket } from 'ws';
import { GameError } from '@yshi/game-core/tongits';
import { verifyInitData } from '@yshi/webapp/verify';
import { ClientMessage } from './protocol.js';
import { Room, RoomRegistry } from './room.js';

const PORT = Number(process.env.PORT ?? 8787);
const BOT_TOKEN = process.env.YSHI_BOT_TOKEN;

const registry = new RoomRegistry();
setInterval(() => registry.sweep(), 60_000).unref();

interface Conn {
  userId?: string;
  name?: string;
  room?: Room;
  seat?: number;
}

const http = createServer((req, res) => {
  res.writeHead(req.url === '/healthz' ? 200 : 404, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ ok: req.url === '/healthz' }));
});
const wss = new WebSocketServer({ server: http });

function send(ws: WebSocket, msg: unknown): void {
  if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(msg));
}

function fail(ws: WebSocket, code: string, message: string): void {
  send(ws, { type: 'error', code, message });
}

wss.on('connection', (ws) => {
  const conn: Conn = {};

  ws.on('message', (raw) => {
    let msg: ClientMessage;
    try {
      msg = JSON.parse(String(raw)) as ClientMessage;
    } catch {
      return fail(ws, 'bad_json', 'message is not valid JSON');
    }

    try {
      switch (msg.type) {
        case 'hello': {
          if (BOT_TOKEN) {
            const v = verifyInitData(msg.initData ?? '', BOT_TOKEN, { maxAgeSec: 3600 });
            if (!v.ok || !v.user) return fail(ws, 'auth_failed', `initData rejected: ${v.reason}`);
            conn.userId = v.user.id;
            conn.name = v.user.name || 'Player';
          } else {
            // dev mode
            conn.userId = `dev:${msg.name ?? 'anon'}`;
            conn.name = msg.name ?? 'anon';
          }
          send(ws, { type: 'welcome', userId: conn.userId, name: conn.name });
          return;
        }

        case 'create': {
          if (!conn.userId || !conn.name) return fail(ws, 'no_hello', 'say hello first');
          const room = registry.create();
          const j = room.join(conn.userId, conn.name, (m) => send(ws, m));
          conn.room = room;
          conn.seat = j.seat;
          send(ws, { type: 'created', code: room.code });
          send(ws, { type: 'joined', code: room.code, seat: j.seat, seatToken: j.seatToken });
          room.broadcastLobby();
          return;
        }

        case 'join': {
          if (!conn.userId || !conn.name) return fail(ws, 'no_hello', 'say hello first');
          const room = registry.get(msg.code);
          if (!room) return fail(ws, 'no_room', `no room ${msg.code}`);
          const j = room.join(conn.userId, conn.name, (m) => send(ws, m));
          conn.room = room;
          conn.seat = j.seat;
          send(ws, { type: 'joined', code: room.code, seat: j.seat, seatToken: j.seatToken });
          if (room.state) room.broadcastState();
          else room.broadcastLobby();
          return;
        }

        case 'action': {
          if (!conn.room || conn.seat === undefined) return fail(ws, 'no_room', 'not in a room');
          conn.room.act(conn.seat, msg.action, msg.version);
          return;
        }

        case 'leave': {
          if (conn.room && conn.userId) conn.room.disconnect(conn.userId);
          conn.room = undefined;
          conn.seat = undefined;
          return;
        }

        default:
          return fail(ws, 'bad_type', 'unknown message type');
      }
    } catch (e) {
      if (e instanceof GameError) return fail(ws, e.code, e.message);
      console.error('unhandled', e);
      return fail(ws, 'internal', 'internal error');
    }
  });

  ws.on('close', () => {
    if (conn.room && conn.userId) conn.room.disconnect(conn.userId);
  });
});

http.listen(PORT, () => {
  console.log(`[game-server] listening on :${PORT} (${BOT_TOKEN ? 'yshi auth' : 'DEV mode'})`);
});
