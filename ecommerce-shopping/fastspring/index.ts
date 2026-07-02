import { Integration, Primitive } from '../../src/types/integration';

/**
 * Fastspring Integration
 * Phase 3 - Ecommerce Shopping
 */
export const FASTSPRING: Integration = {
  id: 'fastspring',
  name: 'Fastspring',
  description: 'Integration with Fastspring for enhanced workflow automation',
  category: 'Ecommerce Shopping',
  categoryId: 'ecommerce-shopping',
  phaseNumber: 3,
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
  tags: ['fastspring'],
};

export default FASTSPRING;
