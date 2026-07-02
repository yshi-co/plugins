/**
 * Poker P2P Integration Types
 */

import { Primitive } from '../../src/types/integration';

/**
 * Configuration interface for Poker P2P
 */
export interface PokerP2PConfig {
  // Authentication
  apiKey: string;
  apiSecret: string;
  webhookSecret: string;

  // Game Settings
  gameSettings: {
    minPlayers: number;
    maxPlayers: number;
    defaultBuyIn: number;
    smallBlind: number;
    bigBlind: number;
    maxRaisePerRound: number;
  };

  // Betting Limits
  bettingLimits: {
    minBet: number;
    maxBet: number;
    potLimit: boolean;
  };

  // Webhook Configuration
  webhook: {
    url: string;
    events: PokerP2PEventType[];
    retryAttempts: number;
    retryDelayMs: number;
  };

  // API Endpoints
  apiEndpoint: string;
  gameServerUrl: string;
}

/**
 * Poker P2P event types
 */
export type PokerP2PEventType =
  | 'game.created'
  | 'game.started'
  | 'game.move'
  | 'game.bet'
  | 'game.raise'
  | 'game.call'
  | 'game.check'
  | 'game.fold'
  | 'game.showdown'
  | 'game.winner'
  | 'game.ended'
  | 'player.joined'
  | 'player.left'
  | 'player.all-in';

/**
 * Poker hand type
 */
export type PokerHand =
  | 'royal-flush'
  | 'straight-flush'
  | 'four-of-a-kind'
  | 'full-house'
  | 'flush'
  | 'straight'
  | 'three-of-a-kind'
  | 'two-pair'
  | 'pair'
  | 'high-card';

/**
 * Player in a poker game
 */
export interface PokerPlayer {
  id: string;
  userId: string;
  username: string;
  chipStack: number;
  holeCards?: string[];
  position: 'small-blind' | 'big-blind' | 'early' | 'middle' | 'late' | 'cutoff' | 'button';
  status: 'active' | 'folded' | 'all-in' | 'waiting';
  totalBet: number;
  isDealer: boolean;
}

/**
 * Game state for poker
 */
export interface PokerGameState {
  gameId: string;
  status: 'waiting' | 'in-progress' | 'showdown' | 'completed';
  players: PokerPlayer[];
  communityCards: string[];
  currentPhase: 'preflop' | 'flop' | 'turn' | 'river' | 'showdown';
  pot: number;
  currentBet: number;
  activePlayerIndex: number;
  dealerIndex: number;
  rounds: number;
}

/**
 * Incoming webhook event from Poker P2P
 */
export interface PokerP2PWebhookEvent {
  event: PokerP2PEventType;
  timestamp: string;
  gameId: string;
  data: Record<string, any>;
  signature: string;
}

/**
 * Request to Poker P2P API
 */
export interface PokerP2PRequest {
  action: 'create-game' | 'join-game' | 'make-move' | 'fold' | 'check' | 'call' | 'raise' | 'end-game';
  gameId?: string;
  playerId?: string;
  parameters: Record<string, any>;
}

/**
 * Response from Poker P2P API
 */
export interface PokerP2PResponse {
  success: boolean;
  gameState?: PokerGameState;
  error?: string;
  message?: string;
  data?: Record<string, any>;
}

/**
 * Tournament structure
 */
export interface PokerTournament {
  id: string;
  name: string;
  startTime: string;
  maxPlayers: number;
  entryFee: number;
  prizePool: number;
  status: 'scheduled' | 'in-progress' | 'completed';
  players: string[];
  rounds: PokerGameState[];
}

/**
 * Player statistics
 */
export interface PokerPlayerStats {
  userId: string;
  totalGamesPlayed: number;
  wins: number;
  losses: number;
  avgBuyIn: number;
  bestHand: PokerHand;
  totalWinnings: number;
  winRate: number;
}
