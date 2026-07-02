/**
 * Tongits P2P Utility Functions
 */

import crypto from 'crypto';
import { TongitsP2PRequest, TongitsP2PResponse, Card, Meld } from './types';

/**
 * Format API request to Tongits P2P
 */
export function formatRequest(action: string, parameters: any): TongitsP2PRequest {
  return {
    action: action as any,
    parameters,
  };
}

/**
 * Parse API response from Tongits P2P
 */
export function parseResponse(response: any): TongitsP2PResponse {
  if (response.success === undefined) {
    return { success: true, data: response };
  }
  return response;
}

/**
 * Validate webhook signature
 */
export function validateWebhookSignature(
  payload: any,
  signature: string,
  secret: string
): boolean {
  const payloadString = typeof payload === 'string' ? payload : JSON.stringify(payload);
  const hmac = crypto
    .createHmac('sha256', secret)
    .update(payloadString)
    .digest('hex');
  return hmac === signature;
}

/**
 * Generate webhook signature
 */
export function generateWebhookSignature(payload: any, secret: string): string {
  const payloadString = typeof payload === 'string' ? payload : JSON.stringify(payload);
  return crypto
    .createHmac('sha256', secret)
    .update(payloadString)
    .digest('hex');
}

/**
 * Map tongits event to Yshi format
 */
export function mapToYshiFormat(event: any): any {
  return {
    type: 'tongits-event',
    timestamp: new Date().toISOString(),
    data: event,
    metadata: {
      source: 'tongits-p2p',
      version: '1.0.0',
    },
  };
}

/**
 * Handle webhook event
 */
export function handleWebhookEvent(event: any): void {
  console.log('Processing tongits event:', event.type);

  switch (event.type) {
    case 'game.created':
      console.log('New game created:', event.data.gameId);
      break;
    case 'game.meld':
      console.log('Meld declared:', event.data.meldType);
      break;
    case 'game.knock':
      console.log('Knock!', event.data.knockPoints);
      break;
    case 'game.winner':
      console.log('Game winner:', event.data.winner);
      break;
    default:
      console.log('Unknown event:', event.type);
  }
}

/**
 * Get card display string
 */
export function getCardDisplay(card: Card): string {
  const suits: Record<string, string> = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠',
  };
  return `${card.rank}${suits[card.suit]}`;
}

/**
 * Get card value for scoring
 */
export function getCardValue(card: Card): number {
  const values: Record<string, number> = {
    A: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
  };
  return values[card.rank] || 0;
}

/**
 * Calculate deadwood total
 */
export function calculateDeadwood(cards: Card[]): number {
  return cards.reduce((total, card) => total + getCardValue(card), 0);
}

/**
 * Validate meld
 */
export function validateMeld(meld: Meld): boolean {
  if (meld.cards.length < 3) return false;

  const ranks = meld.cards.map((c) => c.rank);
  const suits = meld.cards.map((c) => c.suit);

  // Check for pung (three of a kind)
  if (meld.type === 'pung') {
    return new Set(ranks).size === 1;
  }

  // Check for run (sequence)
  if (meld.type === 'run') {
    return isStraight(ranks) && new Set(suits).size === 1;
  }

  // Check for kong (four of a kind)
  if (meld.type === 'kong') {
    return meld.cards.length === 4 && new Set(ranks).size === 1;
  }

  return false;
}

/**
 * Check if ranks form a sequence
 */
function isStraight(ranks: string[]): boolean {
  const rankOrder = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const indices = ranks.map((r) => rankOrder.indexOf(r)).sort((a, b) => a - b);

  for (let i = 0; i < indices.length - 1; i++) {
    if (indices[i + 1] - indices[i] !== 1) {
      return false;
    }
  }

  return true;
}

/**
 * Calculate meld score
 */
export function calculateMeldScore(meld: Meld): number {
  const scores: Record<string, number> = {
    pung_low: 2,
    pung_middle: 5,
    pung_high: 10,
    kong_low: 4,
    kong_middle: 10,
    kong_high: 20,
    run: 5,
  };

  if (meld.type === 'pung' || meld.type === 'kong') {
    const minRank = Math.min(...meld.cards.map((c) => getCardValue(c)));
    const type = meld.type;

    if (minRank <= 5) return scores[`${type}_low`];
    if (minRank <= 9) return scores[`${type}_middle`];
    return scores[`${type}_high`];
  }

  return scores['run'] || 0;
}

/**
 * Get player hand status
 */
export function getHandStatus(
  melds: Meld[],
  deadwood: Card[],
  hasKnocked: boolean
): string {
  if (hasKnocked) return 'knocked';
  if (melds.length === 0 && deadwood.length > 0) return 'unmelded';
  if (melds.length > 0 && deadwood.length > 0) return 'partial-meld';
  return 'no-melds';
}

/**
 * Format game status
 */
export function formatGameStatus(status: string): string {
  const statuses: Record<string, string> = {
    waiting: 'Waiting for players to join',
    'in-progress': 'Game in progress',
    counting: 'Counting hands',
    completed: 'Game completed',
  };
  return statuses[status] || status;
}

/**
 * Retry failed API call with exponential backoff
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxRetries - 1) {
        const delay = baseDelay * Math.pow(2, attempt);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError || new Error('Max retries reached');
}

/**
 * Generate player draw from deck
 */
export function drawCard(deck: Card[]): Card | null {
  if (deck.length === 0) return null;
  return deck.pop() || null;
}

/**
 * Shuffle deck
 */
export function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
