# 🎮 Yshi Miniapps — Architecture

Design for the first playable miniapps on the Yshi platform, following the strategy in
the repo analysis: **build a shared game-platform layer once, ship many small games on
top of it** (the Gamee model, not the single-title Hamster Kombat model).

First titles:

1. **Tongits P2P** (`apps/tongits`) — 3-player Filipino card game, server-authoritative
   real-time multiplayer. Retention driver.
2. **Yshi Taps** (`apps/tapper`) — tap/idle points clicker with upgrade loop, energy,
   daily streaks. Acquisition driver; exercises the Points economy.

Verified platform contract: see [yshi-api-notes.md](./yshi-api-notes.md).

## Monorepo layout

```
miniapps/
├── package.json              # npm workspaces root
├── tsconfig.base.json
├── packages/
│   ├── yshi-webapp/          # Typed WebApp SDK wrapper + server-side initData verify
│   └── game-core/            # Pure-TS game engines (no DOM, no IO) + unit tests
│       └── src/tongits/      # Tongits rules engine (state machine)
├── apps/
│   ├── tongits/              # Vite + Preact frontend (self-contained bundle)
│   └── tapper/               # Vite + vanilla-TS frontend (tiny bundle)
└── server/                   # Node WebSocket game server (rooms, seats, reconnect)
```

Rationale:

- **Engines are pure TS** in `game-core` — deterministic (seeded RNG injected), fully
  unit-testable, shared verbatim by the server (authoritative) and the client
  (optimistic rendering / legal-move hints). No trust is placed in the client.
- **`yshi-webapp`** wraps `window.Yshi.WebApp` with types and a mock fallback so apps
  run in a plain browser during development; its `verifyInitData()` helper runs on the
  server (Telegram-style HMAC data-check-string).
- **Bundle constraint**: Yshi hosts bundles behind a walled-garden CSP, so frontends
  must be self-contained (no CDN assets). Vite with `base: './'` and inlined assets.
  The Tongits realtime server is reached via the `web_app.url` launch escape hatch or a
  CSP-allowed WebSocket origin — to be confirmed against the review process; the
  protocol keeps the transport swappable (`packages` never import `ws` directly).

## Shared platform layer (server/)

| Concern | Approach |
|---|---|
| Transport | WebSocket (`ws`), JSON messages, versioned protocol in `server/src/protocol.ts` |
| Rooms | In-memory room registry; one engine instance per room; seats bound to verified Yshi user ids |
| Auth | Client sends `initData` on connect → server verifies HMAC → seat identity |
| Authority | Server applies engine actions; clients receive **redacted** per-seat views (opponents' hands hidden) |
| Reconnect | Seat token survives socket drops; state snapshot on rejoin |
| Matchmaking | v1: room codes shared in chat (bot posts an inline "Join" button); auto-match queue later |
| Points/leaderboards | Yshi Points via `requestPoints` broker for entry/cosmetics; leaderboards in the app Datastore (mind the 10k-record cap → aggregate rows, not per-game rows) |
| Bot loop | Game results posted back to the chat via the owning bot (`sendMessage`), invites via inline keyboards |

## Tongits rules implemented (engine v1)

- 52-card deck, 3 players; dealer 13 cards, others 12; dealer opens (discards first).
- Turn: draw from stock **or** take top discard only if it immediately forms an exposed
  meld; then optionally meld / sapaw (lay off); then discard.
- Melds: sets (3–4 same rank) and straight-flush runs (3+ consecutive, same suit).
- Endings: **Tongits** (hand emptied → outright win), **stock exhausted** (lowest deadwood
  count wins), **Draw call** (player with an exposed, un-sapawed meld may call; others
  fold or challenge; lowest count among participants wins).
- **Burned (sunog)**: a player with no exposed meld cannot call a draw and loses count
  ties; standard card values (A=1, face=10, pips=face value).
- Deterministic: engine takes `(seed, config)`; every action is a serializable event —
  enables replay, audit, and server/client state parity.

## Yshi Taps design (v1)

- Tap → +points (client-predicted, server-capped): server validates taps/second ceiling
  and energy budget; balance is authoritative server-side (anti-cheat baseline).
- Energy pool + regen; upgrades: MultiTap, Energy Limit, Regen Speed (exponential costs).
- Daily streak bonus; referral hook (Yshi contact invite) reserved for v2.
- Persistence: local-first (`localStorage`) synced to Yshi KV storage; leaderboard
  aggregates in Datastore.
- Points integration: soft-currency is in-game; **real** Yshi Points awards flow through
  the host-confirmed broker only (no client-side minting).

## Deployment flow

1. `npm run build -w apps/<name>` → self-contained `dist/`
2. Upload: `POST /v1/developer/apps/{slug}/versions` (owner session)
3. `POST .../versions/{n}/promote` → live
4. Bind to bot: `PATCH /v1/bots/{username}` menu_button → the app slug

## Non-goals for v1

- Real-money play (Payments API) — Points only; compliance review required first.
- Poker P2P — same platform layer will host it, but RMG-adjacent rules need a
  separate compliance pass.
- Native matchmaking/ELO across games — after two titles prove the room layer.
