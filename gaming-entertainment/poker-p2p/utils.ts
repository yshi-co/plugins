/**
 * Poker P2P Utility Functions
 */

import crypto from 'crypto';
import { PokerP2PRequest, PokerP2PResponse, PokerMove } from './types';

/**
 * Format API request to Poker P2P
 */
export function formatRequest(action: string, parameters: any): PokerP2PRequest {
  return {
    action: action as any,
    parameters,
  };
}

/**
 * Parse API response from Poker P2P
 */
export function parseResponse(response: any): PokerP2PResponse {
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
 * Map poker event to Yshi format
 */
export function mapToYshiFormat(event: any): any {
  return {
    type: 'poker-event',
    timestamp: new Date().toISOString(),
    data: event,
    metadata: {
      source: 'poker-p2p',
      version: '1.0.0',
    },
  };
}

/**
 * Handle webhook event
 */
export function handleWebhookEvent(event: any): void {
  console.log('Processing poker event:', event.type);

  switch (event.type) {
    case 'game.created':
      console.log('New game created:', event.data.gameId);
      break;
    case 'game.winner':
      console.log('Game winner:', event.data.winner);
      break;
    case 'player.all-in':
      console.log('Player all-in:', event.data.playerId);
      break;
    default:
      console.log('Unknown event:', event.type);
  }
}

/**
 * Validate poker move
 */
export function validatePokerMove(move: PokerMove): boolean {
  if (!move.from || !move.to) {
    return false;
  }

  // Additional validation logic
  return true;
}

/**
 * Calculate pot odds
 */
export function calculatePotOdds(currentBet: number, pot: number): number {
  if (pot === 0) return 0;
  return (currentBet / (pot + currentBet)) * 100;
}

/**
 * Calculate hand strength
 */
export function calculateHandStrength(cards: string[]): number {
  if (cards.length < 2) return 0;

  // Simplified hand strength calculation
  // In production, use a proper poker hand evaluator
  const uniqueRanks = new Set(cards.map((card) => card[0]));
  const uniqueSuits = new Set(cards.map((card) => card[1]));

  let strength = 0;

  // Check for pairs
  if (cards.filter((c) => c[0] === cards[0][0]).length >= 2) {
    strength += 10;
  }

  // Check for flush draw
  if (uniqueSuits.size === 1) {
    strength += 20;
  }

  return strength;
}

/**
 * Format chip stack for display
 */
export function formatChipStack(chips: number): string {
  if (chips >= 1000000) {
    return `${(chips / 1000000).toFixed(2)}M`;
  }
  if (chips >= 1000) {
    return `${(chips / 1000).toFixed(2)}K`;
  }
  return chips.toString();
}

/**
 * Get game status description
 */
export function getGameStatusDescription(status: string): string {
  const descriptions: Record<string, string> = {
    waiting: 'Waiting for players',
    'in-progress': 'Game in progress',
    showdown: 'Showdown - cards revealed',
    completed: 'Game completed',
  };
  return descriptions[status] || 'Unknown status';
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
