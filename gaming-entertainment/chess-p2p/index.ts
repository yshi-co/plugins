import { Integration, Primitive } from '../../src/types/integration';

/**
 * Chess P2P Integration
 * Phase 14 - Gaming Entertainment
 * Real-time peer-to-peer chess gaming with Yshi bot integration
 */
export const CHESS_P2P: Integration = {
  id: 'chess-p2p',
  name: 'Chess P2P',
  description: 'Real-time peer-to-peer chess gaming with Yshi bot integration for move notifications, ratings, and match management',
  category: 'Gaming & Entertainment',
  categoryId: 'gaming-entertainment',
  phaseNumber: 14,
  status: 'Planning',

  // API Primitives used by this integration
  primitives: [
    Primitive.BotWebhooks,
    Primitive.MiniApps,
    Primitive.PointsSystem,
  ],

  // Use cases and features
  useCases: [
    {
      title: 'Real-Time Move Notifications',
      description: 'Send instant notifications for each move played, checkmate threats, and game status updates to keep players engaged.',
      primitives: [Primitive.BotWebhooks],
    },
    {
      title: 'Interactive Chess Board',
      description: 'Display an interactive chess board Mini App showing current position, move history, captured pieces, and game timer.',
      primitives: [Primitive.MiniApps],
    },
    {
      title: 'Player Rating & Achievements',
      description: 'Track chess ratings (Elo), award points for wins, and create achievement badges for milestones (first checkmate, 10 wins, etc).',
      primitives: [Primitive.PointsSystem],
    },
    {
      title: 'Ranked Tournaments',
      description: 'Organize chess tournaments with automatic matchmaking, Swiss-system pairing, and live bracket updates in Yshi.',
      primitives: [Primitive.BotWebhooks, Primitive.MiniApps],
    },
    {
      title: 'Game Analysis & Statistics',
      description: 'Provide move suggestions, game analysis, openings database, and player statistics dashboards within Mini Apps.',
      primitives: [Primitive.MiniApps],
    },
  ],

  // API documentation
  apiDocUrl: 'https://chess-p2p-api.example.com/docs',
  
  // Implementation details
  difficulty: 'high',
  estimatedEffort: '5-7 weeks',
  dependencies: ['Chess engine (Stockfish)', 'Real-time game state sync', 'Player ELO rating system'],
  tags: ['chess', 'p2p', 'gaming', 'real-time', 'strategy', 'tournaments', 'elo-rating'],
};

export default CHESS_P2P;
