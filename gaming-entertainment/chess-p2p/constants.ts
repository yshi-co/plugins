/**
 * Chess P2P Integration Constants
 */

// Integration metadata
export const CHESS_P2P_NAME = 'Chess P2P';
export const CHESS_P2P_ID = 'chess-p2p';
export const CHESS_P2P_VERSION = '1.0.0';
export const CHESS_P2P_DESCRIPTION = 'Real-time peer-to-peer chess gaming with Yshi integration';

// API Endpoints
export const API_ENDPOINTS = {
  createMatch: '/api/matches/create',
  getMatch: '/api/matches/{matchId}',
  makeMove: '/api/matches/{matchId}/move',
  resign: '/api/matches/{matchId}/resign',
  offerDraw: '/api/matches/{matchId}/offer-draw',
  acceptDraw: '/api/matches/{matchId}/accept-draw',
  getAnalysis: '/api/matches/{matchId}/analysis',
  getPlayer: '/api/players/{playerId}',
  getPlayerStats: '/api/players/{playerId}/stats',
  getTournaments: '/api/tournaments',
  createTournament: '/api/tournaments/create',
  getOpenings: '/api/openings',
};

// Event types
export const EVENT_TYPES = {
  MATCH_CREATED: 'match.created',
  MATCH_STARTED: 'match.started',
  MATCH_MOVE: 'match.move',
  MATCH_CHECK: 'match.check',
  MATCH_CHECKMATE: 'match.checkmate',
  MATCH_STALEMATE: 'match.stalemate',
  MATCH_RESIGNATION: 'match.resignation',
  MATCH_TIMEOUT: 'match.timeout',
  MATCH_DRAW: 'match.draw',
  MATCH_COMPLETED: 'match.completed',
  PLAYER_JOINED: 'player.joined',
  PLAYER_RATING_UPDATED: 'player.rating-updated',
  TOURNAMENT_CREATED: 'tournament.created',
  TOURNAMENT_ROUND_STARTED: 'tournament.round-started',
};

// Match statuses
export const MATCH_STATUSES = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
};

// Match results
export const MATCH_RESULTS = {
  WHITE_WIN: 'white-win',
  BLACK_WIN: 'black-win',
  DRAW: 'draw',
  ABANDONED: 'abandoned',
};

// Match termination reasons
export const TERMINATION_REASONS = {
  CHECKMATE: 'checkmate',
  RESIGNATION: 'resignation',
  TIMEOUT: 'timeout',
  STALEMATE: 'stalemate',
  INSUFFICIENT_MATERIAL: 'insufficient-material',
  THREEFOLD_REPETITION: 'threefold-repetition',
  FIFTY_MOVE_RULE: 'fifty-move-rule',
};

// Piece types
export const PIECE_TYPES = {
  PAWN: 'pawn',
  KNIGHT: 'knight',
  BISHOP: 'bishop',
  ROOK: 'rook',
  QUEEN: 'queen',
  KING: 'king',
};

// Piece colors
export const PIECE_COLORS = {
  WHITE: 'white',
  BLACK: 'black',
};

// Board squares (algebraic notation)
export const SQUARES = [
  'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1',
  'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
  'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
  'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
  'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
  'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
  'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
  'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8',
];

// Standard starting position
export const STARTING_POSITION =
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

// Chess notation (Portable Game Notation)
export const PGN_TAGS = {
  EVENT: 'Event',
  SITE: 'Site',
  DATE: 'Date',
  ROUND: 'Round',
  WHITE: 'White',
  BLACK: 'Black',
  RESULT: 'Result',
  TIME_CONTROL: 'TimeControl',
  OPENING: 'Opening',
  ECO: 'ECO', // Encyclopedia of Chess Openings
};

// Time control formats
export const TIME_CONTROLS = {
  BULLET: 'bullet',
  BLITZ: 'blitz',
  RAPID: 'rapid',
  CLASSICAL: 'classical',
  CORRESPONDENCE: 'correspondence',
};

// Tournament formats
export const TOURNAMENT_FORMATS = {
  ROUND_ROBIN: 'round-robin',
  SWISS: 'swiss',
  KNOCKOUT: 'knockout',
};

// Error codes
export const ERROR_CODES = {
  INVALID_MATCH_ID: 'INVALID_MATCH_ID',
  MATCH_NOT_FOUND: 'MATCH_NOT_FOUND',
  INVALID_MOVE: 'INVALID_MOVE',
  NOT_YOUR_TURN: 'NOT_YOUR_TURN',
  MATCH_ALREADY_ENDED: 'MATCH_ALREADY_ENDED',
  ILLEGAL_POSITION: 'ILLEGAL_POSITION',
  TIME_EXPIRED: 'TIME_EXPIRED',
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
  MOVE_TIMEOUT: 300000, // 5 minutes (for rapid)
  ENGINE_ANALYSIS: 10000, // 10 seconds
  API_REQUEST: 30000, // 30 seconds
  WEBHOOK_DELIVERY: 10000, // 10 seconds
};

// ELO rating constants
export const ELO_CONSTANTS = {
  INITIAL_RATING: 1200,
  K_FACTOR_BEGINNER: 40,
  K_FACTOR_INTERMEDIATE: 32,
  K_FACTOR_EXPERT: 24,
  K_FACTOR_MASTER: 16,
};

export default {
  CHESS_P2P_NAME,
  CHESS_P2P_ID,
  CHESS_P2P_VERSION,
  CHESS_P2P_DESCRIPTION,
  API_ENDPOINTS,
  EVENT_TYPES,
  MATCH_STATUSES,
  MATCH_RESULTS,
  TERMINATION_REASONS,
  PIECE_TYPES,
  PIECE_COLORS,
  SQUARES,
  TIME_CONTROLS,
  TOURNAMENT_FORMATS,
  ERROR_CODES,
  HTTP_STATUS,
  TIMEOUTS,
  ELO_CONSTANTS,
};
