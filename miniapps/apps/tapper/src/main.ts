import { getWebApp } from '@yshi/webapp';
import {
  TapState,
  UPGRADE_INFO,
  UpgradeKind,
  buyUpgrade,
  dailyCheck,
  deserialize,
  energyCap,
  perTap,
  serialize,
  tap,
  tick,
  upgradeCost,
} from './game.js';

const SAVE_KEY = 'yshi-taps-v1';
const wa = getWebApp();
const userName = wa.initDataUnsafe.user?.name ?? 'Player';

const todayStr = () => new Date().toISOString().slice(0, 10);
const state: TapState = deserialize(localStorage.getItem(SAVE_KEY), Date.now(), todayStr());

const app = document.getElementById('app')!;
const floatLayer = document.getElementById('float-layer')!;

// Static shell only — all dynamic values are set via textContent below.
app.innerHTML = `
  <div class="top">
    <span class="who" id="who"></span>
    <span class="streak" id="streak"></span>
  </div>
  <div class="balance">🪙 <span id="balance">0</span> <small id="pertap"></small></div>
  <button id="coin" aria-label="Tap to earn">🪙</button>
  <div class="energy">
    <div class="bar"><div class="fill" id="energy-fill"></div></div>
    <div class="label"><span>⚡ Energy</span><span id="energy-label"></span></div>
  </div>
  <div class="upgrades" id="upgrades"></div>
`;

const els = {
  who: document.getElementById('who')!,
  balance: document.getElementById('balance')!,
  pertap: document.getElementById('pertap')!,
  streak: document.getElementById('streak')!,
  energyFill: document.getElementById('energy-fill')!,
  energyLabel: document.getElementById('energy-label')!,
  upgrades: document.getElementById('upgrades')!,
  coin: document.getElementById('coin')!,
};

els.who.textContent = `👤 ${userName}`;

function fmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + 'M';
  if (n >= 10_000) return (n / 1000).toFixed(1) + 'K';
  return String(Math.floor(n));
}

/** <el><span class=a>…</span><br/><span class=b>…</span></el> without innerHTML. */
function twoLine(clsA: string, textA: string, clsB: string, textB: string): HTMLSpanElement {
  const wrap = document.createElement('span');
  const a = document.createElement('span');
  a.className = clsA;
  a.textContent = textA;
  const b = document.createElement('span');
  b.className = clsB;
  b.textContent = textB;
  wrap.append(a, document.createElement('br'), b);
  return wrap;
}

function render(): void {
  els.balance.textContent = fmt(state.balance);
  els.pertap.textContent = `+${perTap(state)}/tap`;
  els.streak.textContent = state.streak > 1 ? `🔥 ${state.streak}-day streak` : '';
  const cap = energyCap(state);
  els.energyFill.style.width = `${(100 * state.energy) / cap}%`;
  els.energyLabel.textContent = `${Math.floor(state.energy)} / ${cap}`;
  renderUpgrades();
}

function renderUpgrades(): void {
  els.upgrades.replaceChildren();
  (Object.keys(UPGRADE_INFO) as UpgradeKind[]).forEach((kind) => {
    const info = UPGRADE_INFO[kind];
    const level = state.upgrades[kind];
    const cost = upgradeCost(kind, level);
    const btn = document.createElement('button');
    btn.className = 'upg';
    btn.disabled = state.balance < cost;
    btn.append(
      twoLine('name', info.name, 'desc', info.desc),
      twoLine('cost', `🪙 ${fmt(cost)}`, 'lvl', `lvl ${level}`),
    );
    btn.onclick = () => {
      if (buyUpgrade(state, kind)) {
        save();
        render();
      }
    };
    els.upgrades.appendChild(btn);
  });
}

function floatText(x: number, y: number, text: string): void {
  const el = document.createElement('div');
  el.className = 'float';
  el.textContent = text;
  el.style.left = `${x - 14}px`;
  el.style.top = `${y - 30}px`;
  floatLayer.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

function toast(text: string): void {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

function onTap(x: number, y: number): void {
  tick(state, Date.now());
  const gained = tap(state);
  if (gained > 0) {
    floatText(x, y, `+${gained}`);
    if (state.totalTaps % 500 === 0) {
      // milestone → notify the owning bot (shows up as web_app_data)
      wa.sendData(JSON.stringify({ kind: 'taps-milestone', totalTaps: state.totalTaps, balance: state.balance }));
    }
  } else {
    floatText(x, y, '⚡0');
  }
  render();
}

els.coin.addEventListener('pointerdown', (e) => onTap(e.clientX, e.clientY));

function save(): void {
  localStorage.setItem(SAVE_KEY, serialize(state));
}

// regen + autosave loops
setInterval(() => {
  tick(state, Date.now());
  render();
}, 1000);
setInterval(save, 3000);
window.addEventListener('beforeunload', save);

// daily streak
const bonus = dailyCheck(state, todayStr());
if (bonus > 0) toast(`🔥 Day ${state.streak} streak — +${bonus} bonus!`);

wa.ready();
render();
