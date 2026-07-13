/**
 * E2E smoke: 3 WS clients create/join a room and play simple legal moves
 * (draw → discard first card; fold fights) until the game ends.
 * Usage: tsx scripts/smoke.ts [wsUrl]
 */
import WebSocket from 'ws';

const URL = process.argv[2] ?? 'ws://localhost:8787';
const names = ['Ana', 'Ben', 'Cid'];

interface View {
  seat: number;
  turn: number;
  phase: string;
  hand: { rank: number; suit: string }[];
  fight?: { caller: number; decisions: Record<number, string | null> };
  result?: { reason: string; winner: number; counts?: number[] };
  version: number;
}

let code = '';
let done = 0;
const sockets: WebSocket[] = [];

function connect(i: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(URL);
    sockets.push(ws);
    const send = (m: unknown) => ws.send(JSON.stringify(m));

    ws.on('open', () => send({ type: 'hello', name: names[i] }));
    ws.on('error', reject);
    ws.on('message', (raw) => {
      const msg = JSON.parse(String(raw));
      switch (msg.type) {
        case 'welcome':
          if (i === 0) send({ type: 'create', game: 'tongits' });
          else send({ type: 'join', code });
          break;
        case 'created':
          code = msg.code;
          console.log(`room ${code}`);
          resolve();
          break;
        case 'joined':
          if (i > 0) resolve();
          break;
        case 'state': {
          const v: View = msg.view;
          if (v.result) {
            if (++done === 3) {
              console.log(
                `game over: ${v.result.reason}, winner seat ${v.result.winner}, counts=${JSON.stringify(v.result.counts)}`,
              );
              sockets.forEach((s) => s.close());
              process.exit(0);
            }
            return;
          }
          if (v.phase === 'fight' && v.fight && v.fight.decisions[v.seat] === null) {
            send({ type: 'action', action: { type: 'fightDecision', decision: 'fold' }, version: v.version });
            return;
          }
          if (v.turn !== v.seat) return;
          if (v.phase === 'draw') {
            send({ type: 'action', action: { type: 'drawStock' }, version: v.version });
          } else if (v.phase === 'action') {
            send({ type: 'action', action: { type: 'discard', card: v.hand[0] }, version: v.version });
          }
          break;
        }
        case 'error':
          console.error(`client ${i} error:`, msg.code, msg.message);
          break;
      }
    });
  });
}

setTimeout(() => {
  console.error('TIMEOUT: game did not finish in 30s');
  process.exit(1);
}, 30_000);

await connect(0);
await connect(1);
await connect(2);
console.log('all clients seated, playing...');
