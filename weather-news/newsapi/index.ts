import { Integration, Primitive } from '../../src/types/integration';

/**
 * Newsapi Integration
 * Phase 19 - Weather News
 */
export const NEWSAPI: Integration = {
  id: 'newsapi',
  name: 'Newsapi',
  description: 'Integration with Newsapi for enhanced workflow automation',
  category: 'Weather News',
  categoryId: 'weather-news',
  phaseNumber: 19,
  status: 'Planning',

  // API Primitives used by this integration
  primitives: [
    Primitive.BotWebhooks,
  ],

  // Use cases and features
  useCases: [
    {
      title: 'Primary Use Case',
      description: 'Describe the main capability of this integration',
      primitives: [Primitive.BotWebhooks],
    },
  ],

  // API documentation
  apiDocUrl: 'https://docs.yshi.co',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['newsapi'],
};

export default NEWSAPI;
