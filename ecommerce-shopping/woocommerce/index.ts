import { Integration, Primitive } from '../../src/types/integration';

/**
 * Woocommerce Integration
 * Phase 3 - Ecommerce Shopping
 */
export const WOOCOMMERCE: Integration = {
  id: 'woocommerce',
  name: 'Woocommerce',
  description: 'Integration with Woocommerce for enhanced workflow automation',
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
  tags: ['woocommerce'],
};

export default WOOCOMMERCE;
