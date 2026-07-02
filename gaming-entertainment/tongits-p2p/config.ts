/**
 * Tongits P2P Configuration Template
 */

import { TongitsP2PConfig } from './types';

/**
 * Default configuration template for Tongits P2P integration
 * Customize these values for your environment
 */
export const TONGITS_P2P_CONFIG: TongitsP2PConfig = {
  // Authentication - Get these from your Tongits P2P account dashboard
  apiKey: process.env.TONGITS_P2P_API_KEY || 'your-api-key-here',
  apiSecret: process.env.TONGITS_P2P_API_SECRET || 'your-api-secret-here',
  webhookSecret: process.env.TONGITS_P2P_WEBHOOK_SECRET || 'your-webhook-secret-here',

  // Game Settings - Standard Tongits rules
  gameSettings: {
    minPlayers: 3,
    maxPlayers: 3, // Tongits is a 3-player game
    cardsPerPlayer: 12,
    stockPileSize: 4, // Remaining cards after dealing
    maxRounds: 10,
  },

  // Scoring Rules - Points for melds and deadwood
  scoringRules: {
    meldBonus: 25, // Bonus for first meld
    winBonus: 50, // Bonus for winning round
    drawPenalty: 10, // Penalty for draw/knock
    knockPenalty: 25, // Penalty for failed knock
  },

  // Webhook Configuration - Yshi will receive these events
  webhook: {
    url: process.env.TONGITS_P2P_WEBHOOK_URL || 'https://your-yshi-webhook.example.com/tongits-p2p',
    events: [
      'game.created',
      'game.started',
      'game.draw',
      'game.meld',
      'game.knock',
      'game.draw-called',
      'game.winner',
      'game.ended',
      'player.joined',
      'player.turn',
      'round.completed',
    ],
    retryAttempts: 3,
    retryDelayMs: 2000,
  },

  // API Endpoints
  apiEndpoint: process.env.TONGITS_P2P_API_ENDPOINT || 'https://api.tongits-p2p.example.com',
  gameServerUrl: process.env.TONGITS_P2P_GAME_SERVER || 'https://game.tongits-p2p.example.com',
};

/**
 * Meld scoring values
 * Based on standard Tongits rules
 */
export const MELD_VALUES = {
  pung: {
    low: 2, // 3-5
    middle: 5, // 6-9
    high: 10, // 10-K
    ace: 15,
  },
  kong: {
    low: 4,
    middle: 10,
    high: 20,
    ace: 30,
  },
  run: {
    standard: 5,
    withAce: 10,
  },
  quint: {
    bonus: 25,
  },
};

/**
 * Hand categories for scoring
 */
export const HAND_CATEGORIES = {
  flush: { bonus: 50, description: 'All cards of same suit' },
  sequence: { bonus: 30, description: 'Consecutive sequences' },
  pair: { points: 5, description: 'Pair of cards' },
};

/**
 * Game variants and house rules
 */
export const GAME_VARIANTS = {
  standard: {
    name: 'Standard Tongits',
    knockAttempts: 1,
    knockPenalty: 10,
    description: 'Classic 3-player Tongits',
  },
  aggressive: {
    name: 'Aggressive Tongits',
    knockAttempts: 2,
    knockPenalty: 25,
    description: 'Multiple knock attempts allowed',
  },
  team: {
    name: 'Team Tongits',
    maxPlayers: 6,
    description: '2 teams of 3 players',
  },
};

/**
 * Player skill levels
 */
export const SKILL_LEVELS = {
  beginner: { minGames: 0, minWins: 0, description: 'Learning the game' },
  intermediate: { minGames: 20, minWins: 5, description: 'Getting better' },
  advanced: { minGames: 100, minWins: 40, description: 'Experienced player' },
  expert: { minGames: 300, minWins: 150, description: 'Tongits master' },
};

/**
 * Achievement unlock conditions
 */
export const ACHIEVEMENTS = {
  firstWin: { condition: 'wins >= 1', badge: '🏆', name: 'First Victory' },
  winStreak: { condition: 'consecutive_wins >= 5', badge: '🔥', name: 'Hot Streak' },
  perfectHand: { condition: 'all_face_cards_meld', badge: '💎', name: 'Perfect Hand' },
  comeback: { condition: 'win_from_down_by_100', badge: '⚡', name: 'Comeback Kid' },
  teamPlayer: { condition: 'play_100_games_with_same_player', badge: '👥', name: 'Team Player' },
  master: { condition: 'wins >= 500', badge: '👑', name: 'Tongits Master' },
};

/**
 * Tournament formats
 */
export const TOURNAMENT_FORMATS = {
  roundRobin: {
    name: 'Round Robin',
    description: 'Everyone plays everyone',
    rounds: 'variable',
  },
  elimination: {
    name: 'Single Elimination',
    description: 'One loss and you\'re out',
    rounds: Math.ceil(Math.log2(6)), // For typical 3-6 players
  },
  swiss: {
    name: 'Swiss System',
    description: 'Balanced matchmaking',
    rounds: 'fixed',
  },
};

/**
 * Export configuration
 */
export default TONGITS_P2P_CONFIG;
