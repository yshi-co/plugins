/**
 * Poker P2P Integration Constants
 */

// Integration metadata
export const POKER_P2P_NAME = 'Poker P2P';
export const POKER_P2P_ID = 'poker-p2p';
export const POKER_P2P_VERSION = '1.0.0';
export const POKER_P2P_DESCRIPTION = 'Real-time peer-to-peer poker gaming with Yshi integration';

// API Endpoints
export const API_ENDPOINTS = {
  createGame: '/api/games/create',
  getGame: '/api/games/{gameId}',
  joinGame: '/api/games/{gameId}/join',
  leaveGame: '/api/games/{gameId}/leave',
  makeMove: '/api/games/{gameId}/move',
  fold: '/api/games/{gameId}/fold',
  check: '/api/games/{gameId}/check',
  call: '/api/games/{gameId}/call',
  raise: '/api/games/{gameId}/raise',
  allIn: '/api/games/{gameId}/all-in',
  endGame: '/api/games/{gameId}/end',
  getPlayer: '/api/players/{playerId}',
  getPlayerStats: '/api/players/{playerId}/stats',
  getTournaments: '/api/tournaments',
  createTournament: '/api/tournaments/create',
};

// Event types
export const EVENT_TYPES = {
  GAME_CREATED: 'game.created',
  GAME_STARTED: 'game.started',
  GAME_MOVE: 'game.move',
  GAME_BET: 'game.bet',
  GAME_RAISE: 'game.raise',
  GAME_CALL: 'game.call',
  GAME_CHECK: 'game.check',
  GAME_FOLD: 'game.fold',
  GAME_SHOWDOWN: 'game.showdown',
  GAME_WINNER: 'game.winner',
  GAME_ENDED: 'game.ended',
  PLAYER_JOINED: 'player.joined',
  PLAYER_LEFT: 'player.left',
  PLAYER_ALL_IN: 'player.all-in',
};

// Game statuses
export const GAME_STATUSES = {
  WAITING: 'waiting',
  IN_PROGRESS: 'in-progress',
  SHOWDOWN: 'showdown',
  COMPLETED: 'completed',
};

// Player statuses
export const PLAYER_STATUSES = {
  ACTIVE: 'active',
  FOLDED: 'folded',
  ALL_IN: 'all-in',
  WAITING: 'waiting',
};

// Game phases
export const GAME_PHASES = {
  PREFLOP: 'preflop',
  FLOP: 'flop',
  TURN: 'turn',
  RIVER: 'river',
  SHOWDOWN: 'showdown',
};

// Player positions
export const PLAYER_POSITIONS = {
  SMALL_BLIND: 'small-blind',
  BIG_BLIND: 'big-blind',
  EARLY: 'early',
  MIDDLE: 'middle',
  LATE: 'late',
  CUTOFF: 'cutoff',
  BUTTON: 'button',
};

// Poker hands ranked from best to worst
export const POKER_HANDS = {
  ROYAL_FLUSH: 'royal-flush',
  STRAIGHT_FLUSH: 'straight-flush',
  FOUR_OF_A_KIND: 'four-of-a-kind',
  FULL_HOUSE: 'full-house',
  FLUSH: 'flush',
  STRAIGHT: 'straight',
  THREE_OF_A_KIND: 'three-of-a-kind',
  TWO_PAIR: 'two-pair',
  PAIR: 'pair',
  HIGH_CARD: 'high-card',
};

// Error codes
export const ERROR_CODES = {
  INVALID_GAME_ID: 'INVALID_GAME_ID',
  GAME_NOT_FOUND: 'GAME_NOT_FOUND',
  INVALID_MOVE: 'INVALID_MOVE',
  NOT_YOUR_TURN: 'NOT_YOUR_TURN',
  INSUFFICIENT_CHIPS: 'INSUFFICIENT_CHIPS',
  INVALID_BET: 'INVALID_BET',
  PLAYER_ALREADY_FOLDED: 'PLAYER_ALREADY_FOLDED',
  GAME_FULL: 'GAME_FULL',
  AUTHENTICATION_FAILED: 'AUTHENTICATION_FAILED',
  WEBHOOK_VERIFICATION_FAILED: 'WEBHOOK_VERIFICATION_FAILED',
};

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

// Timeout values (in milliseconds)
export const TIMEOUTS = {
  PLAYER_TURN: 60000, // 1 minute
  GAME_IDLE: 300000, // 5 minutes
  API_REQUEST: 30000, // 30 seconds
  WEBHOOK_DELIVERY: 10000, // 10 seconds
};

// Card suits
export const SUITS = ['♠', '♥', '♦', '♣'];

// Card ranks
export const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Standard deck
export const STANDARD_DECK = 52;

export default {
  POKER_P2P_NAME,
  POKER_P2P_ID,
  POKER_P2P_VERSION,
  POKER_P2P_DESCRIPTION,
  API_ENDPOINTS,
  EVENT_TYPES,
  GAME_STATUSES,
  PLAYER_STATUSES,
  GAME_PHASES,
  PLAYER_POSITIONS,
  POKER_HANDS,
  ERROR_CODES,
  HTTP_STATUS,
  TIMEOUTS,
  SUITS,
  RANKS,
  STANDARD_DECK,
};
