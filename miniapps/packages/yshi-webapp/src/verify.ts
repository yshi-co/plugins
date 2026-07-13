/**
 * Server-side initData verification. Node-only (imports node:crypto) —
 * import via `@yshi/webapp/verify`, never from client bundles.
 *
 * docs.yshi.co: "your server can verify its signature the same way a
 * Telegram initData hash is checked" — i.e.:
 *   secret_key = HMAC_SHA256(key = "WebAppData", msg = bot_token)
 *   hash       = hex(HMAC_SHA256(key = secret_key, msg = data_check_string))
 * where data_check_string is all fields except `hash`, as `key=value`
 * lines sorted alphabetically, joined by '\n'.
 */
import { createHmac, timingSafeEqual } from 'node:crypto';

export interface VerifiedInitData {
  ok: boolean;
  reason?: 'missing_hash' | 'bad_signature' | 'expired';
  user?: { id: string; name: string; username?: string };
  fields?: Record<string, string>;
}

export function verifyInitData(
  initData: string,
  botToken: string,
  opts: { maxAgeSec?: number; now?: number } = {},
): VerifiedInitData {
  const params = new URLSearchParams(initData);
  const hash = params.get('hash');
  if (!hash) return { ok: false, reason: 'missing_hash' };
  params.delete('hash');

  const dataCheckString = [...params.entries()]
    .map(([k, v]) => `${k}=${v}`)
    .sort()
    .join('\n');

  const secretKey = createHmac('sha256', 'WebAppData').update(botToken).digest();
  const expected = createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

  const a = Buffer.from(expected, 'utf8');
  const b = Buffer.from(hash, 'utf8');
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return { ok: false, reason: 'bad_signature' };
  }

  const authDate = Number(params.get('auth_date') ?? 0);
  if (opts.maxAgeSec && authDate > 0) {
    const now = opts.now ?? Math.floor(Date.now() / 1000);
    if (now - authDate > opts.maxAgeSec) return { ok: false, reason: 'expired' };
  }

  const fields = Object.fromEntries(params.entries());
  let user: VerifiedInitData['user'];
  const rawUser = params.get('user');
  if (rawUser) {
    try {
      const u = JSON.parse(rawUser) as { id?: unknown; name?: unknown; username?: unknown };
      if (u.id != null) user = { id: String(u.id), name: String(u.name ?? ''), username: u.username as string | undefined };
    } catch {
      /* leave user undefined; caller decides */
    }
  }
  return { ok: true, user, fields };
}

/** Build a signed initData string — for tests and local dev servers. */
export function signInitData(fields: Record<string, string>, botToken: string): string {
  const params = new URLSearchParams(fields);
  const dataCheckString = [...params.entries()]
    .map(([k, v]) => `${k}=${v}`)
    .sort()
    .join('\n');
  const secretKey = createHmac('sha256', 'WebAppData').update(botToken).digest();
  const hash = createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
  params.set('hash', hash);
  return params.toString();
}
