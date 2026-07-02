import { Integration, Primitive } from '../../src/types/integration';

/**
 * Magento Integration
 * Phase 3 - Ecommerce Shopping
 */
export const MAGENTO: Integration = {
  id: 'magento',
  name: 'Magento',
  description: 'Integration with Magento for enhanced workflow automation',
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
  tags: ['magento'],
};

export default MAGENTO;
