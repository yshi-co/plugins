import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { Action, Card, SeatView, discardPickupMelds } from '@yshi/game-core/tongits';
import { SUIT_SYMBOLS, cardId } from '@yshi/game-core';
import { getWebApp } from '@yshi/webapp';
import { Driver, DriverEvent, LocalDriver, NetDriver } from './drivers.js';

const wa = getWebApp();
const RANK_LABELS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const SERVER_URL = (import.meta as { env?: Record<string, string> }).env?.VITE_SERVER_URL ?? 'ws://localhost:8787';

function CardFace({ card, mini, selected, onClick }: { card: Card; mini?: boolean; selected?: boolean; onClick?: () => void }) {
  const red = card.suit === 'h' || card.suit === 'd';
  return (
    <div class={`card ${red ? 'red' : ''} ${selected ? 'sel' : ''} ${mini ? 'mini' : ''}`} onClick={onClick}>
      <span>{RANK_LABELS[card.rank - 1]}</span>
      <span class="suit">{SUIT_SYMBOLS[card.suit]}</span>
    </div>
  );
}

function Melds({ view, onSapaw }: { view: SeatView; onSapaw?: (target: number, meldIndex: number) => void }) {
  return (
    <div class="melds">
      {view.players.flatMap((p, target) =>
        p.melds.map((meld, mi) => (
          <div class="meld" title={`${p.name}'s meld`} onClick={() => onSapaw?.(target, mi)}>
            {meld.map((c) => (
              <CardFace card={c} mini />
            ))}
          </div>
        )),
      )}
    </div>
  );
}

export function App() {
  const [screen, setScreen] = useState<'menu' | 'lobby' | 'table'>('menu');
  const [name, setName] = useState(wa.initDataUnsafe.user?.name ?? '');
  const [code, setCode] = useState('');
  const [lobby, setLobby] = useState<{ code: string; players: string[]; needed: number } | null>(null);
  const [view, setView] = useState<SeatView | null>(null);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const driverRef = useRef<Driver | null>(null);

  useEffect(() => {
    wa.ready();
    return () => driverRef.current?.close();
  }, []);

  function handleEvent(ev: DriverEvent): void {
    switch (ev.kind) {
      case 'view':
        setView(ev.view);
        setScreen('table');
        setError('');
        break;
      case 'lobby':
        setLobby({ code: ev.code, players: ev.players, needed: ev.needed });
        setScreen('lobby');
        break;
      case 'joined':
        break;
      case 'error':
        setError(ev.message);
        break;
    }
  }

  function start(driver: Driver): void {
    driverRef.current?.close();
    driverRef.current = driver;
    driver.subscribe(handleEvent);
  }

  const playerName = name.trim() || 'Player';

  function act(action: Action): void {
    setError('');
    driverRef.current?.act(action);
    setSelected(new Set());
  }

  const mySeat = view?.seat ?? 0;
  const myTurn = view && view.turn === mySeat && view.phase !== 'ended' && view.phase !== 'fight';
  const selCards = useMemo(
    () => (view ? view.hand.filter((c) => selected.has(cardId(c))) : []),
    [view, selected],
  );

  function toggle(card: Card): void {
    const id = cardId(card);
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  }

  if (screen === 'menu') {
    return (
      <div class="menu">
        <h1>
          Ton<span>gits</span>
        </h1>
        <input
          placeholder="Your name"
          value={name}
          onInput={(e) => setName((e.target as HTMLInputElement).value)}
        />
        <button class="btn" onClick={() => start(new LocalDriver(playerName))}>
          🤖 Play vs Bots
        </button>
        <button
          class="btn ghost"
          onClick={() => start(new NetDriver(SERVER_URL, { name: playerName, initData: wa.initData, create: true }))}
        >
          ➕ Create Room
        </button>
        <div class="row">
          <input
            placeholder="Room code"
            value={code}
            onInput={(e) => setCode((e.target as HTMLInputElement).value.toUpperCase())}
          />
          <button
            class="btn ghost"
            disabled={code.trim().length === 0}
            onClick={() => start(new NetDriver(SERVER_URL, { name: playerName, initData: wa.initData, code: code.trim() }))}
          >
            Join
          </button>
        </div>
        <div class="err">{error}</div>
      </div>
    );
  }

  if (screen === 'lobby' && lobby) {
    return (
      <div class="menu">
        <h1>
          Room <span>{lobby.code}</span>
        </h1>
        <p>Share this code in your Yshi chat.</p>
        {lobby.players.map((p) => (
          <div>👤 {p}</div>
        ))}
        <p>Waiting for {lobby.needed} more…</p>
        <button
          class="btn ghost"
          onClick={() => wa.sendData(JSON.stringify({ kind: 'tongits-invite', code: lobby.code }))}
        >
          📣 Invite via bot
        </button>
        <div class="err">{error}</div>
      </div>
    );
  }

  if (!view) return null;

  const me = view.players[mySeat]!;
  const opponents = view.players.map((p, seat) => ({ ...p, seat })).filter((p) => p.seat !== mySeat);
  const top = view.discard[view.discard.length - 1];
  const canPickup =
    myTurn && view.phase === 'draw' && top !== undefined && discardPickupMelds(view.hand, top).length > 0;
  const iDecide = view.phase === 'fight' && view.fight!.caller !== mySeat && view.fight!.decisions[mySeat] === null;
  const status =
    view.phase === 'ended'
      ? ''
      : view.phase === 'fight'
        ? `⚔️ ${view.players[view.fight!.caller]!.name} called a Draw!`
        : view.turn === mySeat
          ? view.phase === 'draw'
            ? 'Your turn — draw a card'
            : 'Meld, lay off, or discard'
          : `${view.players[view.turn]!.name}'s turn…`;

  return (
    <div class="table">
      <div class="opps">
        {opponents.map((p) => (
          <div class={`opp ${view.turn === p.seat && view.phase !== 'ended' ? 'active' : ''}`}>
            <div class="nm">
              <span>{p.name}</span>
              <span>🂠 {p.handCount}</span>
            </div>
            {p.wasSapawed ? <div>🔒 sapawed</div> : null}
          </div>
        ))}
      </div>

      <div class="mid">
        <div class="stock">
          <div class="back" onClick={() => myTurn && view.phase === 'draw' && act({ type: 'drawStock' })} />
          {view.stockCount} left
        </div>
        <div class="stock">
          {top ? <CardFace card={top} /> : <div class="card" style="opacity:0.25" />}
          discard
        </div>
      </div>

      <div class="status">{status}</div>
      <Melds
        view={view}
        onSapaw={(target, meldIndex) =>
          myTurn && view.phase === 'action' && selCards.length > 0 && act({ type: 'sapaw', target, meldIndex, cards: selCards })
        }
      />

      <div class="hand">
        {view.hand.map((c) => (
          <CardFace card={c} selected={selected.has(cardId(c))} onClick={() => toggle(c)} />
        ))}
      </div>

      <div class="actions">
        {view.phase === 'draw' && myTurn ? (
          <>
            <button class="btn" onClick={() => act({ type: 'drawStock' })}>
              Draw
            </button>
            <button class="btn ghost" disabled={!canPickup || selCards.length < 2} onClick={() => act({ type: 'drawDiscard', cards: selCards })}>
              Pick up
            </button>
            <button class="btn ghost" disabled={me.melds.length === 0 || me.wasSapawed} onClick={() => act({ type: 'callDraw' })}>
              ⚔️ Call Draw
            </button>
          </>
        ) : null}
        {view.phase === 'action' && myTurn ? (
          <>
            <button class="btn ghost" disabled={selCards.length < 3} onClick={() => act({ type: 'meld', cards: selCards })}>
              Meld
            </button>
            <button class="btn" disabled={selCards.length !== 1} onClick={() => act({ type: 'discard', card: selCards[0]! })}>
              Discard
            </button>
          </>
        ) : null}
      </div>
      <div class="you">
        {me.name} — select cards, tap a table meld to sapaw
      </div>
      <div class="err">{error}</div>

      {iDecide ? (
        <div class="overlay">
          <div class="modal">
            <h2>⚔️ Draw called!</h2>
            <p>{view.players[view.fight!.caller]!.name} challenges everyone. Fight with your hand count?</p>
            <button class="btn" disabled={me.melds.length === 0} onClick={() => act({ type: 'fightDecision', decision: 'challenge' })}>
              Challenge
            </button>
            <button class="btn ghost" onClick={() => act({ type: 'fightDecision', decision: 'fold' })}>
              Fold
            </button>
            {me.melds.length === 0 ? <p style="font-size:12px">You have no exposed meld — you must fold.</p> : null}
          </div>
        </div>
      ) : null}

      {view.result ? (
        <div class="overlay">
          <div class="modal">
            <h2>
              {view.result.winner === mySeat ? '🏆 You win!' : `${view.players[view.result.winner]!.name} wins`}
            </h2>
            <p>
              {view.result.reason === 'tongits'
                ? 'TONGITS! Hand emptied.'
                : view.result.reason === 'stock'
                  ? 'Stock ran out — lowest count wins.'
                  : 'Draw fight resolved.'}
            </p>
            {view.result.counts ? (
              <table>
                {view.players.map((p, s) => (
                  <tr>
                    <td>
                      {p.name}
                      {view.result!.burned[s] ? ' 🔥burned' : ''}
                      {view.result!.folded?.includes(s) ? ' (folded)' : ''}
                    </td>
                    <td>{view.result!.counts![s]} pts</td>
                  </tr>
                ))}
              </table>
            ) : null}
            <button
              class="btn"
              onClick={() => {
                driverRef.current?.close();
                setView(null);
                setScreen('menu');
              }}
            >
              Back to menu
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
