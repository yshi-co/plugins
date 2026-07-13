# Yshi API — Verified Contract Notes

Condensed from https://docs.yshi.co/ (fetched 2026-07-13). This is the confirmed, deployed
surface — use it over assumptions when building miniapps. The live schema is at
`https://api.yshi.co/v1/schema/` (Swagger at `/v1/docs/`).

## Base URLs

| Surface | URL |
|---|---|
| Production API | `https://api.yshi.co/v1` |
| Bot Platform | `https://api.yshi.co/v1/bots` |
| Mini App runtime | `https://api.yshi.co/v1/miniapps` |
| Developer / Studio | `https://api.yshi.co/v1/developer` |
| OAuth / OIDC | `https://api.yshi.co/oauth` + `/.well-known/openid-configuration` |

## Mini Apps

- A Mini App is a web page launched inside a Yshi chat (bot menu button, inline
  `web_app` button, or Discover). Sandboxed frame.
- **Bundles are Yshi-hosted**: upload via `POST /v1/developer/apps/{slug}/versions`,
  then `POST .../versions/{n}/promote`. Served from
  `GET /v1/miniapps/{slug}/content` behind a **walled-garden CSP** — build
  self-contained bundles (inline/relative assets; assume external hosts are blocked).
  Inline buttons *can* also launch an arbitrary `{"web_app": {"url": ...}}`, which is
  the escape hatch for self-hosted apps needing WebSocket backends.
- Launch: `POST /v1/miniapps/{slug}/launch` mints signed `initData` (user identity +
  granted scopes). Verify server-side **exactly like Telegram initData** (HMAC data-check-string).

### WebApp SDK

```html
<script src="https://yshi.co/webapp.js"></script>
<script>
  const wa = window.Yshi.WebApp;
  wa.ready();                                          // app mounted
  const user = wa.initDataUnsafe.user;                 // display only — verify initData server-side
  wa.requestPoints({ amount: 50, reason: "Unlock" });  // host-confirmed Points spend
  wa.sendData(JSON.stringify({ ... }));                // → owning bot webhook as web_app_data
</script>
```

### OAuth scopes (colon form — dotted forms deprecated; `points.*` retired hard)

`openid` `profile` · `contacts:read` · `stars:spend` `stars:read` `stars:subscribe` ·
`storage` · `data` · `channels:read/write` · `livechat:read/write`

### Points (Stars)

Miniapps never touch money. Two-step broker behind `requestPoints`:
1. `POST /v1/miniapps/points/requests` — `{amount, reason}`, scope `stars:spend`
2. `POST /v1/miniapps/points/requests/{id}/confirm` — host confirms with user, debits

### Storage

- KV: `PUT/GET /v1/miniapps/storage/{key}` — ≤256 KB per value, scope `storage`
- Datastore: `/v1/miniapps/data/collections[/{id}/records[/{rid}]]` — JSON records
  ≤256 KB, **cap 10,000 records/app** (`422 quota_exceeded`), scope `data`

## Bots

- Bot token: `Authorization: Bearer <prefix>:<secret>` — shown once on create/rotate.
- Webhook: `PUT /v1/bots/{username}/webhook` `{url, secret}`. Updates arrive signed:
  `X-Yshi-Signature` = hex HMAC-SHA256(secret, raw body) — verify constant-time.
- Update types: `message`, `callback_query`, `web_app_data` (from `sendData`).
- Reply inline in the webhook HTTP response body (`{"method": "sendMessage", ...}`),
  or proactively via `POST /v1/bots/api/sendMessage` (own conversations only).
- Menu button: `PATCH /v1/bots/{username}` with
  `{"menu_button": {"type": "web_app", "text": "Play", "mini_app": "<slug>"}}`.

## Payments (real money — separate from Points)

Full merchant flow exists (`BotPayment` intents, checkout at `yshi.co/pay/{id}`,
withdrawals, HMAC settlement webhooks with `t=<ts>,v1=<hmac>` signature, default
currency PHP). **Games should use Points only**; payments are a later, compliance-gated step.

## Ops notes

- Errors are RFC 9457 `application/problem+json`; `429` carries `Retry-After`.
- `422` = semantic failure (e.g. insufficient points) — distinct from `400` validation.
- docs.yshi.co 403s non-browser user agents — fetch with a browser UA.
