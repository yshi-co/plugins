/**
 * Typed wrapper around the Yshi WebApp SDK (https://yshi.co/webapp.js →
 * window.Yshi.WebApp). Falls back to a dev mock in a plain browser so
 * miniapps run locally without the Yshi host.
 *
 * Contract per docs.yshi.co (see docs/yshi-api-notes.md in this repo).
 */

export interface YshiUser {
  id: string;
  name: string;
  username?: string;
}

export interface YshiWebApp {
  /** Signal the host that the app has mounted. */
  ready(): void;
  /** Raw signed launch context — send to YOUR server and verify there. */
  initData: string;
  /** Parsed but UNVERIFIED launch context. Display only; never trust for auth. */
  initDataUnsafe: { user?: YshiUser; [k: string]: unknown };
  /** Ask the host to confirm a Points (Stars) spend with the user. */
  requestPoints(req: { amount: number; reason: string }): void;
  /** Deliver a payload to the owning bot as a `web_app_data` update. */
  sendData(data: string): void;
}

declare global {
  interface Window {
    Yshi?: { WebApp?: YshiWebApp };
  }
}

/** True when running inside the Yshi host. */
export function isYshiHost(): boolean {
  return typeof window !== 'undefined' && !!window.Yshi?.WebApp;
}

/** Returns the real SDK inside Yshi, or a logging dev mock outside it. */
export function getWebApp(): YshiWebApp {
  if (isYshiHost()) return window.Yshi!.WebApp!;
  return devMock;
}

const devMock: YshiWebApp = {
  ready: () => console.info('[yshi-mock] ready()'),
  initData: '',
  initDataUnsafe: { user: { id: 'dev-user', name: 'Dev User' } },
  requestPoints: (req) => console.info('[yshi-mock] requestPoints', req),
  sendData: (data) => console.info('[yshi-mock] sendData', data),
};
