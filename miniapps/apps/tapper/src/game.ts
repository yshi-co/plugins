/**
 * Yshi Taps — pure game logic (no DOM). Client-predicted; a production
 * deployment mirrors these caps server-side (see docs/miniapps-architecture.md).
 */

export type UpgradeKind = 'multitap' | 'energycap' | 'regen';

export interface TapState {
  balance: number;
  totalTaps: number;
  energy: number;
  upgrades: Record<UpgradeKind, number>;
  streak: number;
  lastSeen: string; // YYYY-MM-DD
  lastTick: number; // ms epoch
}

export const UPGRADE_INFO: Record<
  UpgradeKind,
  { name: string; desc: string; baseCost: number; growth: number }
> = {
  multitap: { name: 'MultiTap', desc: '+1 point per tap', baseCost: 200, growth: 2 },
  energycap: { name: 'Energy Limit', desc: '+250 max energy', baseCost: 150, growth: 2 },
  regen: { name: 'Recharge Speed', desc: '+1 energy per second', baseCost: 300, growth: 2 },
};

export function newState(now: number, today: string): TapState {
  return {
    balance: 0,
    totalTaps: 0,
    energy: 500,
    upgrades: { multitap: 0, energycap: 0, regen: 0 },
    streak: 0,
    lastSeen: today,
    lastTick: now,
  };
}

export function perTap(s: TapState): number {
  return 1 + s.upgrades.multitap;
}

export function energyCap(s: TapState): number {
  return 500 + 250 * s.upgrades.energycap;
}

export function regenPerSec(s: TapState): number {
  return 3 + s.upgrades.regen;
}

/** Advance regen; call from a timer and before any interaction. */
export function tick(s: TapState, now: number): void {
  const dt = Math.max(0, (now - s.lastTick) / 1000);
  s.energy = Math.min(energyCap(s), s.energy + dt * regenPerSec(s));
  s.lastTick = now;
}

/** Apply n taps; returns points gained (0 when out of energy). */
export function tap(s: TapState, n = 1): number {
  const possible = Math.min(n, Math.floor(s.energy / 1)); // 1 energy per tap
  if (possible <= 0) return 0;
  const gained = possible * perTap(s);
  s.energy -= possible;
  s.balance += gained;
  s.totalTaps += possible;
  return gained;
}

export function upgradeCost(kind: UpgradeKind, level: number): number {
  const u = UPGRADE_INFO[kind];
  return Math.round(u.baseCost * Math.pow(u.growth, level));
}

export function buyUpgrade(s: TapState, kind: UpgradeKind): boolean {
  const cost = upgradeCost(kind, s.upgrades[kind]);
  if (s.balance < cost) return false;
  s.balance -= cost;
  s.upgrades[kind]++;
  if (kind === 'energycap') s.energy = Math.min(energyCap(s), s.energy + 250);
  return true;
}

/** Daily streak check; returns the bonus granted (0 if already seen today). */
export function dailyCheck(s: TapState, today: string): number {
  if (s.lastSeen === today) return 0;
  const prev = new Date(s.lastSeen + 'T00:00:00Z').getTime();
  const cur = new Date(today + 'T00:00:00Z').getTime();
  const oneDay = 24 * 3600 * 1000;
  s.streak = cur - prev === oneDay ? s.streak + 1 : 1;
  s.lastSeen = today;
  const bonus = Math.min(100 * s.streak, 1000);
  s.balance += bonus;
  return bonus;
}

export function serialize(s: TapState): string {
  return JSON.stringify(s);
}

export function deserialize(raw: string | null, now: number, today: string): TapState {
  if (!raw) return newState(now, today);
  try {
    const s = JSON.parse(raw) as TapState;
    if (typeof s.balance !== 'number' || !s.upgrades) return newState(now, today);
    tick(s, now);
    return s;
  } catch {
    return newState(now, today);
  }
}
