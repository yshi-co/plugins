/**
 * Chess P2P Configuration Template
 */

import { ChessP2PConfig } from './types';

/**
 * Default configuration template for Chess P2P integration
 * Customize these values for your environment
 */
export const CHESS_P2P_CONFIG: ChessP2PConfig = {
  // Authentication - Get these from your Chess P2P account dashboard
  apiKey: process.env.CHESS_P2P_API_KEY || 'your-api-key-here',
  apiSecret: process.env.CHESS_P2P_API_SECRET || 'your-api-secret-here',
  webhookSecret: process.env.CHESS_P2P_WEBHOOK_SECRET || 'your-webhook-secret-here',

  // Game Settings - Chess time controls
  gameSettings: {
    timeControl: 'blitz',
    initialTime: 300, // 5 minutes in seconds
    increment: 3, // 3 seconds per move
    maxConcurrentGames: 100,
  },

  // Rating System - ELO rating configuration
  ratingSystem: {
    initialRating: 1200,
    k: 32, // Standard K-factor for most players
    minRating: 0,
    maxRating: 3200,
  },

  // Webhook Configuration - Yshi will receive these events
  webhook: {
    url: process.env.CHESS_P2P_WEBHOOK_URL || 'https://your-yshi-webhook.example.com/chess-p2p',
    events: [
      'match.created',
      'match.started',
      'match.move',
      'match.check',
      'match.checkmate',
      'match.draw',
      'match.completed',
      'player.rating-updated',
    ],
    retryAttempts: 3,
    retryDelayMs: 2000,
  },

  // API Endpoints
  apiEndpoint: process.env.CHESS_P2P_API_ENDPOINT || 'https://api.chess-p2p.example.com',
  gameServerUrl: process.env.CHESS_P2P_GAME_SERVER || 'https://game.chess-p2p.example.com',
  engineUrl: process.env.CHESS_ENGINE_URL || 'https://engine.chess-p2p.example.com',
};

/**
 * Time control presets
 */
export const TIME_CONTROLS = {
  bullet: {
    name: 'Bullet',
    initialTime: 60, // 1 minute
    increment: 0,
    description: 'Fast-paced 1-minute games',
  },
  blitz: {
    name: 'Blitz',
    initialTime: 300, // 5 minutes
    increment: 3,
    description: 'Quick 5-minute games',
  },
  rapid: {
    name: 'Rapid',
    initialTime: 900, // 15 minutes
    increment: 10,
    description: 'Strategic 15-minute games',
  },
  classical: {
    name: 'Classical',
    initialTime: 3600, // 1 hour
    increment: 30,
    description: 'Standard tournament format',
  },
  correspondence: {
    name: 'Correspondence',
    initialTime: 86400, // 1 day
    increment: 43200, // 12 hours
    description: 'Long-term play via messages',
  },
};

/**
 * Rating brackets for matchmaking
 */
export const RATING_BRACKETS = {
  beginner: { min: 0, max: 1200, label: 'Beginner' },
  intermediate: { min: 1200, max: 1600, label: 'Intermediate' },
  advanced: { min: 1600, max: 2000, label: 'Advanced' },
  expert: { min: 2000, max: 2400, label: 'Expert' },
  master: { min: 2400, max: 2800, label: 'Master' },
  grandmaster: { min: 2800, max: 3200, label: 'Grandmaster' },
};

/**
 * Opening database categories
 */
export const OPENING_CATEGORIES = {
  ruyLopez: 'Ruy Lopez',
  sicilianDefense: 'Sicilian Defense',
  frenchDefense: 'French Defense',
  carodKann: 'Caro-Kann Defense',
  queensGambit: "Queen's Gambit",
  englishOpening: 'English Opening',
};

/**
 * Player achievement tiers
 */
export const ACHIEVEMENT_TIERS = {
  newcomer: { minGames: 0, minRating: 0 },
  player: { minGames: 10, minRating: 1200 },
  specialist: { minGames: 50, minRating: 1600 },
  expert: { minGames: 200, minRating: 2000 },
  master: { minGames: 500, minRating: 2400 },
  grandmaster: { minGames: 1000, minRating: 2800 },
};

/**
 * Engine analysis difficulty levels
 */
export const ENGINE_LEVELS = {
  beginner: { depth: 4, nodes: 1000 },
  amateur: { depth: 8, nodes: 10000 },
  professional: { depth: 15, nodes: 100000 },
  master: { depth: 20, nodes: 1000000 },
};

/**
 * Export configuration
 */
export default CHESS_P2P_CONFIG;
