/**
 * Chess P2P Integration Types
 */

import { Primitive } from '../../src/types/integration';

/**
 * Configuration interface for Chess P2P
 */
export interface ChessP2PConfig {
  // Authentication
  apiKey: string;
  apiSecret: string;
  webhookSecret: string;

  // Game Settings
  gameSettings: {
    timeControl: 'bullet' | 'blitz' | 'rapid' | 'classical' | 'correspondence';
    initialTime: number; // in seconds
    increment: number; // seconds added per move
    maxConcurrentGames: number;
  };

  // Rating System
  ratingSystem: {
    initialRating: number;
    k: number; // K-factor for ELO calculation
    minRating: number;
    maxRating: number;
  };

  // Webhook Configuration
  webhook: {
    url: string;
    events: ChessP2PEventType[];
    retryAttempts: number;
    retryDelayMs: number;
  };

  // API Endpoints
  apiEndpoint: string;
  gameServerUrl: string;
  engineUrl?: string; // Stockfish engine endpoint
}

/**
 * Chess P2P event types
 */
export type ChessP2PEventType =
  | 'match.created'
  | 'match.started'
  | 'match.move'
  | 'match.check'
  | 'match.checkmate'
  | 'match.stalemate'
  | 'match.resignation'
  | 'match.timeout'
  | 'match.draw'
  | 'match.completed'
  | 'player.joined'
  | 'player.rating-updated'
  | 'tournament.created'
  | 'tournament.round-started';

/**
 * Chess piece type
 */
export type PieceType = 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king';
export type PieceColor = 'white' | 'black';

/**
 * Chess piece with color
 */
export interface ChessPiece {
  type: PieceType;
  color: PieceColor;
  position: string; // e.g., 'e4', 'a1'
}

/**
 * Chess board state
 */
export interface ChessBoardState {
  squares: (ChessPiece | null)[];
  whiteKingPosition: string;
  blackKingPosition: string;
  enPassantTarget?: string;
  castlingRights: {
    white: { kingside: boolean; queenside: boolean };
    black: { kingside: boolean; queenside: boolean };
  };
  halfmoveClock: number;
  fullmoveNumber: number;
}

/**
 * Chess move
 */
export interface ChessMove {
  from: string;
  to: string;
  promotion?: PieceType;
  timestamp: number;
  san: string; // Standard Algebraic Notation
}

/**
 * Player in chess match
 */
export interface ChessPlayer {
  id: string;
  userId: string;
  username: string;
  rating: number;
  color: PieceColor;
  timeRemaining: number;
  status: 'active' | 'resigned' | 'timed-out';
  ratingChange?: number;
}

/**
 * Chess match state
 */
export interface ChessMatchState {
  matchId: string;
  status: 'pending' | 'in-progress' | 'completed';
  players: ChessPlayer[];
  board: ChessBoardState;
  moves: ChessMove[];
  currentPlayer: PieceColor;
  result?: 'white-win' | 'black-win' | 'draw' | 'abandoned';
  reason?: 'checkmate' | 'resignation' | 'timeout' | 'stalemate' | 'insufficient-material' | 'threefold-repetition';
  startTime: string;
  endTime?: string;
  pgnNotation: string;
}

/**
 * Incoming webhook event from Chess P2P
 */
export interface ChessP2PWebhookEvent {
  event: ChessP2PEventType;
  timestamp: string;
  matchId: string;
  data: Record<string, any>;
  signature: string;
}

/**
 * Request to Chess P2P API
 */
export interface ChessP2PRequest {
  action: 'create-match' | 'make-move' | 'resign' | 'offer-draw' | 'accept-draw' | 'get-analysis';
  matchId?: string;
  parameters: Record<string, any>;
}

/**
 * Response from Chess P2P API
 */
export interface ChessP2PResponse {
  success: boolean;
  matchState?: ChessMatchState;
  analysis?: MoveAnalysis;
  error?: string;
  message?: string;
  data?: Record<string, any>;
}

/**
 * Move analysis from engine
 */
export interface MoveAnalysis {
  move: string;
  evaluation: number; // Centipawn evaluation
  depth: number;
  bestLine: string[];
  accuracy: number; // percentage
}

/**
 * Tournament structure
 */
export interface ChessTournament {
  id: string;
  name: string;
  format: 'round-robin' | 'swiss' | 'knockout';
  rounds: number;
  players: string[];
  standings: ChessPlayerStanding[];
  status: 'scheduled' | 'in-progress' | 'completed';
}

/**
 * Player standing in tournament
 */
export interface ChessPlayerStanding {
  userId: string;
  username: string;
  rating: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  tiebreaker: number;
}

/**
 * Player statistics
 */
export interface ChessPlayerStats {
  userId: string;
  username: string;
  rating: number;
  totalGames: number;
  wins: number;
  draws: number;
  losses: number;
  winRate: number;
  favoriteOpening: string;
  bestAccuracy: number;
  gamesAsWhite: number;
  gamesAsBlack: number;
}
