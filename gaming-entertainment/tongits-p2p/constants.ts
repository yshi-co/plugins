/**
 * Tongits P2P Integration Constants
 */

// Integration metadata
export const TONGITS_P2P_NAME = 'Tongits P2P';
export const TONGITS_P2P_ID = 'tongits-p2p';
export const TONGITS_P2P_VERSION = '1.0.0';
export const TONGITS_P2P_DESCRIPTION = 'Real-time peer-to-peer Tongits card gaming with Yshi integration';

// API Endpoints
export const API_ENDPOINTS = {
  createGame: '/api/games/create',
  getGame: '/api/games/{gameId}',
  joinGame: '/api/games/{gameId}/join',
  leaveGame: '/api/games/{gameId}/leave',
  drawCard: '/api/games/{gameId}/draw',
  discardCard: '/api/games/{gameId}/discard',
  meld: '/api/games/{gameId}/meld',
  knock: '/api/games/{gameId}/knock',
  drawCalled: '/api/games/{gameId}/draw-called',
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
  GAME_DRAW: 'game.draw',
  GAME_MELD: 'game.meld',
  GAME_KNOCK: 'game.knock',
  GAME_DRAW_CALLED: 'game.draw-called',
  GAME_WINNER: 'game.winner',
  GAME_ENDED: 'game.ended',
  PLAYER_JOINED: 'player.joined',
  PLAYER_LEFT: 'player.left',
  PLAYER_TURN: 'player.turn',
  ROUND_STARTED: 'round.started',
  ROUND_COMPLETED: 'round.completed',
};

// Game statuses
export const GAME_STATUSES = {
  WAITING: 'waiting',
  IN_PROGRESS: 'in-progress',
  COUNTING: 'counting', // Counting deadwood
  COMPLETED: 'completed',
};

// Player statuses
export const PLAYER_STATUSES = {
  ACTIVE: 'active',
  KNOCKED: 'knocked',
  DREW: 'drew',
  COMPLETED: 'completed',
};

// Meld types
export const MELD_TYPES = {
  PUNG: 'pung', // Three of a kind
  KONG: 'kong', // Four of a kind
  RUN: 'run', // Sequence (e.g., 5-6-7)
  QUINT: 'quint', // Five in a row
};

// Card suits (Mahjong style)
export const SUITS = {
  HEARTS: 'hearts',
  DIAMONDS: 'diamonds',
  CLUBS: 'clubs',
  SPADES: 'spades',
};

// Card ranks
export const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Card values for scoring
export const CARD_VALUES = {
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

// Standard deck
export const STANDARD_DECK = 52; // One deck (no Jokers in standard Tongits)

// Game configuration
export const GAME_CONFIG = {
  PLAYERS: 3,
  CARDS_PER_PLAYER: 12,
  STOCK_PILE_SIZE: 4,
  MAX_ROUNDS: 10,
  POINTS_TO_WIN: 160,
};

// Meld scores
export const MELD_SCORES = {
  PUNG_LOW: 2, // 3-5
  PUNG_MIDDLE: 5, // 6-9
  PUNG_HIGH: 10, // 10-K
  PUNG_ACE: 15,
  KONG_LOW: 4,
  KONG_MIDDLE: 10,
  KONG_HIGH: 20,
  KONG_ACE: 30,
  RUN_STANDARD: 5,
  RUN_WITH_ACE: 10,
};

// Deadwood scoring
export const DEADWOOD_SCORING = {
  ACE: 1,
  FACE_CARD: 10, // J, Q, K
  NUMBER_CARD: 'face_value', // 2-10
};

// Player positions at table
export const POSITIONS = {
  DEALER: 0,
  SECOND: 1,
  THIRD: 2,
};

// Error codes
export const ERROR_CODES = {
  INVALID_GAME_ID: 'INVALID_GAME_ID',
  GAME_NOT_FOUND: 'GAME_NOT_FOUND',
  INVALID_MOVE: 'INVALID_MOVE',
  NOT_YOUR_TURN: 'NOT_YOUR_TURN',
  INVALID_CARD: 'INVALID_CARD',
  INVALID_MELD: 'INVALID_MELD',
  KNOCK_FAILED: 'KNOCK_FAILED',
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

// Tournament formats
export const TOURNAMENT_FORMATS = {
  ROUND_ROBIN: 'round-robin',
  ELIMINATION: 'elimination',
  SWISS: 'swiss',
};

export default {
  TONGITS_P2P_NAME,
  TONGITS_P2P_ID,
  TONGITS_P2P_VERSION,
  TONGITS_P2P_DESCRIPTION,
  API_ENDPOINTS,
  EVENT_TYPES,
  GAME_STATUSES,
  PLAYER_STATUSES,
  MELD_TYPES,
  SUITS,
  RANKS,
  CARD_VALUES,
  STANDARD_DECK,
  GAME_CONFIG,
  MELD_SCORES,
  DEADWOOD_SCORING,
  ERROR_CODES,
  HTTP_STATUS,
  TIMEOUTS,
  TOURNAMENT_FORMATS,
};
