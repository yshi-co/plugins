import { Integration, Primitive } from '../../src/types/integration';

/**
 * Fullstory Integration
 * Phase 15 - Analytics Intelligence
 */
export const FULLSTORY: Integration = {
  id: 'fullstory',
  name: 'Fullstory',
  description: 'Integration with Fullstory for enhanced workflow automation',
  category: 'Analytics Intelligence',
  categoryId: 'analytics-intelligence',
  phaseNumber: 15,
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
  tags: ['fullstory'],
};

export default FULLSTORY;
