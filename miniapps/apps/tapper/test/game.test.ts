import { describe, expect, it } from 'vitest';
import {
  buyUpgrade,
  dailyCheck,
  deserialize,
  energyCap,
  newState,
  perTap,
  serialize,
  tap,
  tick,
  upgradeCost,
} from '../src/game.js';

const T0 = 1_700_000_000_000;

describe('yshi taps', () => {
  it('taps spend energy and earn points', () => {
    const s = newState(T0, '2026-07-13');
    expect(tap(s, 3)).toBe(3);
    expect(s.balance).toBe(3);
    expect(s.energy).toBe(497);
  });

  it('stops earning at zero energy and regens over time', () => {
    const s = newState(T0, '2026-07-13');
    s.energy = 0;
    expect(tap(s)).toBe(0);
    tick(s, T0 + 10_000); // 10s * 3/s
    expect(s.energy).toBe(30);
    tick(s, T0 + 100_000_000);
    expect(s.energy).toBe(energyCap(s)); // capped
  });

  it('upgrades cost exponentially and take effect', () => {
    const s = newState(T0, '2026-07-13');
    s.balance = 10_000;
    expect(upgradeCost('multitap', 0)).toBe(200);
    expect(buyUpgrade(s, 'multitap')).toBe(true);
    expect(upgradeCost('multitap', 1)).toBe(400);
    expect(perTap(s)).toBe(2);
    s.balance = 0;
    expect(buyUpgrade(s, 'multitap')).toBe(false);
  });

  it('daily streak increments on consecutive days and resets on gaps', () => {
    const s = newState(T0, '2026-07-13');
    expect(dailyCheck(s, '2026-07-13')).toBe(0); // same day
    expect(dailyCheck(s, '2026-07-14')).toBe(100); // streak 1
    expect(dailyCheck(s, '2026-07-15')).toBe(200); // streak 2
    expect(dailyCheck(s, '2026-07-18')).toBe(100); // gap → reset
    expect(s.streak).toBe(1);
  });

  it('round-trips through serialization and survives garbage', () => {
    const s = newState(T0, '2026-07-13');
    tap(s, 5);
    const back = deserialize(serialize(s), T0, '2026-07-13');
    expect(back.balance).toBe(5);
    expect(deserialize('garbage{', T0, '2026-07-13').balance).toBe(0);
    expect(deserialize(null, T0, '2026-07-13').totalTaps).toBe(0);
  });
});
