import { WebhookPayload } from '../types';

export interface WebhookHandlerOptions {
  secret?: string;
  path?: string;
}

/**
 * Registers a webhook handler for incoming Yshi bot events.
 * See: https://docs.yshi.co/webhooks
 */
export function createWebhookHandler(
  handler: (payload: WebhookPayload) => void | Promise<void>,
  options: WebhookHandlerOptions = {}
) {
  return { handler, options };
}

export async function sendMessage(chatId: string, text: string): Promise<void> {
  // POST /bot/sendMessage
  void chatId, text;
}

export async function sendInlineKeyboard(
  chatId: string,
  text: string,
  buttons: Array<{ label: string; callbackData: string }>
): Promise<void> {
  // POST /bot/sendMessage with reply_markup
  void chatId, text, buttons;
}
