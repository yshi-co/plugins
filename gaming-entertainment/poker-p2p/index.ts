import { Integration, Primitive } from '../../src/types/integration';

/**
 * Poker P2P Integration
 * Phase 14 - Gaming Entertainment
 * Real-time peer-to-peer poker gaming platform
 */
export const POKER_P2P: Integration = {
  id: 'poker-p2p',
  name: 'Poker P2P',
  description: 'Real-time peer-to-peer poker gaming with Yshi bot integration for tournaments, notifications, and player management',
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
      title: 'Real-Time Game Notifications',
      description: 'Send instant notifications when players join games, raise bets, or fold. Alert players about their turn and game results.',
      primitives: [Primitive.BotWebhooks],
    },
    {
      title: 'Poker Table Dashboard',
      description: 'Display an embedded poker table interface with Mini Apps showing current hand, chip stack, player positions, and game statistics.',
      primitives: [Primitive.MiniApps],
    },
    {
      title: 'Gamified Points & Leaderboards',
      description: 'Award points for poker wins, big hands, and achievements. Create seasonal leaderboards and poker rankings within Yshi.',
      primitives: [Primitive.PointsSystem],
    },
    {
      title: 'Tournament Management',
      description: 'Organize poker tournaments with Yshi bot hosting brackets, tracking player progress, and announcing winners with rewards.',
      primitives: [Primitive.BotWebhooks, Primitive.MiniApps],
    },
    {
      title: 'Player Statistics & Analytics',
      description: 'Provide win rates, average pot sizes, hand history analysis, and performance metrics within Yshi dashboards.',
      primitives: [Primitive.MiniApps],
    },
  ],

  // API documentation
  apiDocUrl: 'https://poker-p2p-api.example.com/docs',
  
  // Implementation details
  difficulty: 'high',
  estimatedEffort: '6-8 weeks',
  dependencies: ['Real-time gaming infrastructure', 'Card game engine', 'Player matching algorithm'],
  tags: ['poker', 'p2p', 'gaming', 'real-time', 'multiplayer', 'tournaments'],
};

export default POKER_P2P;
