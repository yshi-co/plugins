import { Integration, Primitive } from '../../src/types/integration';

/**
 * Stripe Integration
 * Phase 3 - Ecommerce Shopping
 */
export const STRIPE: Integration = {
  id: 'stripe',
  name: 'Stripe',
  description: 'Integration with Stripe for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.example.com',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['stripe'],
};

export default STRIPE;
