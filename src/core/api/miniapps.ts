import { MiniAppConfig } from '../types';

/**
 * Opens a Mini App inside a Yshi chat.
 * See: https://docs.yshi.co/miniapps
 */
export function createMiniApp(config: MiniAppConfig) {
  return { type: 'miniapp' as const, ...config };
}

export function getMiniAppInitData(): Record<string, string> {
  // Parses the WebApp.initData string from the Yshi SDK
  return {};
}
