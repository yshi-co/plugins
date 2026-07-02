/**
 * Poker P2P Configuration Template
 */

import { PokerP2PConfig } from './types';

/**
 * Default configuration template for Poker P2P integration
 * Customize these values for your environment
 */
export const POKER_P2P_CONFIG: PokerP2PConfig = {
  // Authentication - Get these from your Poker P2P account dashboard
  apiKey: process.env.POKER_P2P_API_KEY || 'your-api-key-here',
  apiSecret: process.env.POKER_P2P_API_SECRET || 'your-api-secret-here',
  webhookSecret: process.env.POKER_P2P_WEBHOOK_SECRET || 'your-webhook-secret-here',

  // Game Settings - Customize poker rules and limits
  gameSettings: {
    minPlayers: 2,
    maxPlayers: 10,
    defaultBuyIn: 1000,
    smallBlind: 10,
    bigBlind: 20,
    maxRaisePerRound: 4, // Number of raises before all-in
  },

  // Betting Limits - Define table stakes
  bettingLimits: {
    minBet: 10,
    maxBet: 10000,
    potLimit: false, // Set true for pot-limit poker
  },

  // Webhook Configuration - Yshi will receive these events
  webhook: {
    url: process.env.POKER_P2P_WEBHOOK_URL || 'https://your-yshi-webhook.example.com/poker-p2p',
    events: [
      'game.created',
      'game.started',
      'game.move',
      'game.bet',
      'game.raise',
      'game.fold',
      'game.winner',
      'game.ended',
      'player.joined',
    ],
    retryAttempts: 3,
    retryDelayMs: 2000,
  },

  // API Endpoints
  apiEndpoint: process.env.POKER_P2P_API_ENDPOINT || 'https://api.poker-p2p.example.com',
  gameServerUrl: process.env.POKER_P2P_GAME_SERVER || 'https://game.poker-p2p.example.com',
};

/**
 * Configuration for specific game variants
 */
export const POKER_VARIANTS = {
  texasHoldem: {
    name: 'Texas Hold\'em',
    communityCardsCount: 5,
    holeCards: 2,
  },
  omaha: {
    name: 'Omaha',
    communityCardsCount: 5,
    holeCards: 4,
  },
  fiveCardDraw: {
    name: 'Five Card Draw',
    communityCardsCount: 0,
    holeCards: 5,
  },
};

/**
 * Tournament configuration presets
 */
export const TOURNAMENT_PRESETS = {
  cash: {
    type: 'cash',
    buyIn: 1000,
    smallBlind: 10,
    bigBlind: 20,
    description: 'Cash game - play as long as you want',
  },
  tournament: {
    type: 'tournament',
    buyIn: 100,
    prizePool: 'progressive',
    description: 'Tournament - climb the ranks',
  },
  sitNGo: {
    type: 'sit-and-go',
    maxPlayers: 6,
    buyIn: 50,
    description: 'Sit & Go - quick tournament format',
  },
};

/**
 * Player achievement tiers
 */
export const ACHIEVEMENT_TIERS = {
  rookie: { minGames: 0, minWins: 0 },
  player: { minGames: 10, minWins: 2 },
  professional: { minGames: 50, minWins: 15 },
  pro: { minGames: 200, minWins: 100 },
  legend: { minGames: 500, minWins: 250 },
};

/**
 * Export configuration
 */
export default POKER_P2P_CONFIG;
