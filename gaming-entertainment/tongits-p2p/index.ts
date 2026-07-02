import { Integration, Primitive } from '../../src/types/integration';

/**
 * Tongits P2P Integration
 * Phase 14 - Gaming Entertainment
 * Real-time peer-to-peer Tongits card game with Yshi bot integration
 */
export const TONGITS_P2P: Integration = {
  id: 'tongits-p2p',
  name: 'Tongits P2P',
  description: 'Real-time peer-to-peer Tongits (Filipino card game) with Yshi bot integration for game hosting, scoring, and tournaments',
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
      title: 'Real-Time Game Play Notifications',
      description: 'Send instant notifications for card draws, melds declared, draws called, and game outcomes to all players in the Yshi chat.',
      primitives: [Primitive.BotWebhooks],
    },
    {
      title: 'Interactive Card Table Interface',
      description: 'Display an embedded Tongits table showing player hands, melds, discard pile, and remaining deck count via Mini Apps.',
      primitives: [Primitive.MiniApps],
    },
    {
      title: 'Points & Leaderboards',
      description: 'Award points based on melds and wins, track total scores, and create leaderboards for regular Tongits players and tournaments.',
      primitives: [Primitive.PointsSystem],
    },
    {
      title: 'Casual Game Sessions',
      description: 'Host quick 3-player Tongits games directly in Yshi with automatic shuffling, dealing, and turn management.',
      primitives: [Primitive.BotWebhooks, Primitive.MiniApps],
    },
    {
      title: 'Tournament Hosting',
      description: 'Organize Tongits tournaments with multiple rounds, elimination brackets, and final winner announcements with rewards.',
      primitives: [Primitive.BotWebhooks, Primitive.MiniApps, Primitive.PointsSystem],
    },
    {
      title: 'Player Statistics',
      description: 'Track win rates, average scores, favorite melds, and playing patterns with analytics dashboards for each player.',
      primitives: [Primitive.MiniApps],
    },
  ],

  // API documentation
  apiDocUrl: 'https://tongits-p2p-api.example.com/docs',
  
  // Implementation details
  difficulty: 'high',
  estimatedEffort: '5-7 weeks',
  dependencies: ['Card game engine', 'Real-time player synchronization', 'Meld recognition system', 'Scoring algorithm'],
  tags: ['tongits', 'p2p', 'gaming', 'card-game', 'filipiniana', 'real-time', 'multiplayer'],
};

export default TONGITS_P2P;
