/**
 * Chess P2P Utility Functions
 */

import crypto from 'crypto';
import { ChessP2PRequest, ChessP2PResponse } from './types';

/**
 * Format API request to Chess P2P
 */
export function formatRequest(action: string, parameters: any): ChessP2PRequest {
  return {
    action: action as any,
    parameters,
  };
}

/**
 * Parse API response from Chess P2P
 */
export function parseResponse(response: any): ChessP2PResponse {
  if (response.success === undefined) {
    return { success: true, matchState: response };
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
 * Map chess event to Yshi format
 */
export function mapToYshiFormat(event: any): any {
  return {
    type: 'chess-event',
    timestamp: new Date().toISOString(),
    data: event,
    metadata: {
      source: 'chess-p2p',
      version: '1.0.0',
    },
  };
}

/**
 * Handle webhook event
 */
export function handleWebhookEvent(event: any): void {
  console.log('Processing chess event:', event.type);

  switch (event.type) {
    case 'match.created':
      console.log('New match created:', event.data.matchId);
      break;
    case 'match.move':
      console.log('Move made:', event.data.move);
      break;
    case 'match.checkmate':
      console.log('Checkmate!');
      break;
    case 'player.rating-updated':
      console.log('Rating updated for:', event.data.playerId);
      break;
    default:
      console.log('Unknown event:', event.type);
  }
}

/**
 * Validate algebraic notation move
 */
export function validateMove(move: string): boolean {
  // Basic validation for standard algebraic notation
  const sanRegex = /^([a-h][1-8]){2}([qrbn])?$|^[O0]-[O0](-[O0])?$/;
  return sanRegex.test(move);
}

/**
 * Convert move to algebraic notation
 */
export function moveToAlgebraic(from: string, to: string, promotion?: string): string {
  let san = `${from}${to}`;
  if (promotion) {
    san += promotion.toLowerCase();
  }
  return san;
}

/**
 * Get piece emoji
 */
export function getPieceEmoji(piece: string): string {
  const pieces: Record<string, Record<string, string>> = {
    white: {
      king: '♔',
      queen: '♕',
      rook: '♖',
      bishop: '♗',
      knight: '♘',
      pawn: '♙',
    },
    black: {
      king: '♚',
      queen: '♛',
      rook: '♜',
      bishop: '♝',
      knight: '♞',
      pawn: '♟',
    },
  };

  const [color, type] = piece.split('_');
  return pieces[color]?.[type] || piece;
}

/**
 * Calculate ELO rating change
 */
export function calculateELORatingChange(
  playerRating: number,
  opponentRating: number,
  result: 'win' | 'draw' | 'loss',
  kFactor: number = 32
): number {
  // Expected score
  const expectedScore =
    1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400));

  // Actual score
  let actualScore = 0;
  if (result === 'win') actualScore = 1;
  else if (result === 'draw') actualScore = 0.5;

  // Rating change
  const ratingChange = kFactor * (actualScore - expectedScore);
  return Math.round(ratingChange);
}

/**
 * Format rating for display
 */
export function formatRating(rating: number): string {
  return Math.round(rating).toString();
}

/**
 * Get rating category
 */
export function getRatingCategory(rating: number): string {
  if (rating < 1200) return 'Beginner';
  if (rating < 1600) return 'Intermediate';
  if (rating < 2000) return 'Advanced';
  if (rating < 2400) return 'Expert';
  if (rating < 2800) return 'Master';
  return 'Grandmaster';
}

/**
 * Time control to milliseconds
 */
export function timeControlToMs(timeControl: { initial: number; increment: number }): number {
  return timeControl.initial * 1000 + timeControl.increment * 1000;
}

/**
 * Format time remaining
 */
export function formatTime(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours}:${String(minutes % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  }
  return `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
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
