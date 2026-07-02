import { Integration, Primitive } from '../../src/types/integration';

/**
 * Crypto Price Tracking Integration
 * Phase 7 - Finance Crypto
 */
export const CRYPTO_PRICE_TRACKING: Integration = {
  id: 'crypto-price-tracking',
  name: 'Crypto Price Tracking',
  description: 'Integration with Crypto Price Tracking for enhanced workflow automation',
  category: 'Finance Crypto',
  categoryId: 'finance-crypto',
  phaseNumber: 7,
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
  tags: ['crypto-price-tracking'],
};

export default CRYPTO_PRICE_TRACKING;
