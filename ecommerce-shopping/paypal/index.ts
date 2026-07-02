import { Integration, Primitive } from '../../src/types/integration';

/**
 * Paypal Integration
 * Phase 3 - Ecommerce Shopping
 */
export const PAYPAL: Integration = {
  id: 'paypal',
  name: 'Paypal',
  description: 'Integration with Paypal for enhanced workflow automation',
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
  tags: ['paypal'],
};

export default PAYPAL;
