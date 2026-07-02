/**
 * Tongits P2P Integration Types
 */

import { Primitive } from '../../src/types/integration';

/**
 * Configuration interface for Tongits P2P
 */
export interface TongitsP2PConfig {
  // Authentication
  apiKey: string;
  apiSecret: string;
  webhookSecret: string;

  // Game Settings
  gameSettings: {
    minPlayers: number;
    maxPlayers: number; // Typically 3
    cardsPerPlayer: number; // Usually 12
    stockPileSize: number;
    maxRounds: number;
  };

  // Scoring Rules
  scoringRules: {
    meldBonus: number;
    winBonus: number;
    drawPenalty: number;
    knockPenalty: number;
  };

  // Webhook Configuration
  webhook: {
    url: string;
    events: TongitsP2PEventType[];
    retryAttempts: number;
    retryDelayMs: number;
  };

  // API Endpoints
  apiEndpoint: string;
  gameServerUrl: string;
}

/**
 * Tongits P2P event types
 */
export type TongitsP2PEventType =
  | 'game.created'
  | 'game.started'
  | 'game.draw'
  | 'game.meld'
  | 'game.knock'
  | 'game.draw-called'
  | 'game.winner'
  | 'game.ended'
  | 'player.joined'
  | 'player.left'
  | 'player.turn'
  | 'round.started'
  | 'round.completed';

/**
 * Card suit
 */
export type CardSuit = 'hearts' | 'diamonds' | 'clubs' | 'spades';

/**
 * Card rank
 */
export type CardRank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

/**
 * Card representation
 */
export interface Card {
  suit: CardSuit;
  rank: CardRank;
}

/**
 * Meld type (set or run)
 */
export type MeldType = 'pung' | 'kong' | 'run' | 'quint';

/**
 * Meld structure
 */
export interface Meld {
  id: string;
  type: MeldType;
  cards: Card[];
  isOpen: boolean;
  addedBy?: string; // Player ID who added to open meld
}

/**
 * Player in Tongits game
 */
export interface TongitsPlayer {
  id: string;
  userId: string;
  username: string;
  hand: Card[];
  melds: Meld[];
  score: number;
  status: 'active' | 'knocked' | 'drew' | 'completed';
  position: number; // 0, 1, or 2
  hasKnocked: boolean;
}

/**
 * Game state for Tongits
 */
export interface TongitsGameState {
  gameId: string;
  status: 'waiting' | 'in-progress' | 'counting' | 'completed';
  players: TongitsPlayer[];
  stockPile: Card[];
  discardPile: Card[];
  currentPlayerIndex: number;
  currentRound: number;
  rounds: number;
  dealerIndex: number;
  isKnockedRound: boolean;
  drawCalled: boolean;
}

/**
 * Incoming webhook event from Tongits P2P
 */
export interface TongitsP2PWebhookEvent {
  event: TongitsP2PEventType;
  timestamp: string;
  gameId: string;
  data: Record<string, any>;
  signature: string;
}

/**
 * Request to Tongits P2P API
 */
export interface TongitsP2PRequest {
  action:
    | 'create-game'
    | 'join-game'
    | 'draw-card'
    | 'discard-card'
    | 'meld'
    | 'knock'
    | 'draw-called'
    | 'end-game';
  gameId?: string;
  playerId?: string;
  parameters: Record<string, any>;
}

/**
 * Response from Tongits P2P API
 */
export interface TongitsP2PResponse {
  success: boolean;
  gameState?: TongitsGameState;
  error?: string;
  message?: string;
  data?: Record<string, any>;
}

/**
 * Game result/scoring
 */
export interface TongitsGameResult {
  gameId: string;
  roundNumber: number;
  results: PlayerResult[];
  totalScores: Map<string, number>;
  winner: string;
}

/**
 * Individual player result
 */
export interface PlayerResult {
  userId: string;
  username: string;
  melds: Meld[];
  deadwood: Card[];
  knockPoints?: number;
  score: number;
  status: 'winner' | 'loser' | 'draw';
}

/**
 * Tournament structure
 */
export interface TongitsTournament {
  id: string;
  name: string;
  maxPlayers: number;
  rounds: number;
  status: 'scheduled' | 'in-progress' | 'completed';
  players: string[];
  standings: TongitsTournamentStanding[];
}

/**
 * Player standing in tournament
 */
export interface TongitsTournamentStanding {
  userId: string;
  username: string;
  wins: number;
  losses: number;
  draws: number;
  totalScore: number;
  avgScore: number;
}

/**
 * Player statistics
 */
export interface TongitsPlayerStats {
  userId: string;
  username: string;
  totalGamesPlayed: number;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;
  bestScore: number;
  avgScore: number;
  favoriteStartingMeld: MeldType;
  knocksAttempted: number;
  knocksSuccessful: number;
}
