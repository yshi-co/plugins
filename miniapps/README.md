# 🎮 Yshi Miniapps

Working miniapp code for the Yshi platform — distinct from the integration *scaffolds*
in the rest of this repo. Design: [docs/miniapps-architecture.md](../docs/miniapps-architecture.md).
Platform contract: [docs/yshi-api-notes.md](../docs/yshi-api-notes.md).

## What's here

| Workspace | What it is |
|---|---|
| `packages/game-core` | Pure-TS game engines. Tongits rules engine (deal, melds, sapaw, draw fights, burned rule, scoring) — deterministic, seeded, 19 unit tests incl. a 25-game bot soak. |
| `packages/yshi-webapp` | Typed `window.Yshi.WebApp` wrapper (+ dev mock for plain browsers) and Node-side `verifyInitData` / `signInitData` (Telegram-style HMAC). |
| `apps/tongits` | **Tongits P2P** miniapp — Preact UI, play vs bots offline or online via room codes. ~12 KB gzipped. |
| `apps/tapper` | **Yshi Taps** — tap/idle clicker: energy, MultiTap/Energy/Regen upgrades, daily streaks. ~2 KB gzipped. |
| `server` | WebSocket game server — rooms, seat tokens, reconnect, server-authoritative engine, per-seat redacted views, optimistic-concurrency (`version`) guard. Verifies `initData` when `YSHI_BOT_TOKEN` is set; dev mode otherwise. |

## Quick start

```bash
cd miniapps
npm install

npm test               # engine + tapper logic tests
npm run typecheck      # all workspaces

npm run dev:tapper     # tap game at http://localhost:5173
npm run dev:server     # game server on :8787 (dev mode)
npm run dev:tongits    # tongits UI (Play vs Bots works without the server)

npm run build          # self-contained dist/ bundles for Yshi upload
```

E2E smoke (3 clients play a full game over the wire):

```bash
npm run dev:server &   # or: tsx server/src/index.ts
npx tsx server/scripts/smoke.ts
```

## Shipping to Yshi

1. `npm run build -w apps/<name>` → `dist/` (self-contained; walled-garden CSP safe)
2. `POST /v1/developer/apps/{slug}/versions` → upload, then promote
3. Bind to a bot: `PATCH /v1/bots/{username}` with a `web_app` menu button

Production server needs `YSHI_BOT_TOKEN` set so only signed `initData` identities can
take seats. Tongits online mode needs `VITE_SERVER_URL` pointing at the deployed
server's `wss://` endpoint at build time.
