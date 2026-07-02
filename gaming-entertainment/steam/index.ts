import { Integration, Primitive } from '../../src/types/integration';

/**
 * Steam Integration
 * Phase 14 - Gaming Entertainment
 */
export const STEAM: Integration = {
  id: 'steam',
  name: 'Steam',
  description: 'Integration with Steam for enhanced workflow automation',
  category: 'Gaming Entertainment',
  categoryId: 'gaming-entertainment',
  phaseNumber: 14,
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
  tags: ['steam'],
};

export default STEAM;
