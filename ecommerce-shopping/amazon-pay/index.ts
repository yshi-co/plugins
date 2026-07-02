import { Integration, Primitive } from '../../src/types/integration';

/**
 * Amazon Pay Integration
 * Phase 3 - Ecommerce Shopping
 */
export const AMAZON_PAY: Integration = {
  id: 'amazon-pay',
  name: 'Amazon Pay',
  description: 'Integration with Amazon Pay for enhanced workflow automation',
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
  tags: ['amazon-pay'],
};

export default AMAZON_PAY;
