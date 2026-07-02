import { Integration, Primitive } from '../../src/types/integration';

/**
 * 2checkout Integration
 * Phase 3 - Ecommerce Shopping
 */
export const 2CHECKOUT: Integration = {
  id: '2checkout',
  name: '2checkout',
  description: 'Integration with 2checkout for enhanced workflow automation',
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
  tags: ['2checkout'],
};

export default 2CHECKOUT;
