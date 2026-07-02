import { Integration, Primitive } from '../../src/types/integration';

/**
 * Tradingview Integration
 * Phase 7 - Finance Crypto
 */
export const TRADINGVIEW: Integration = {
  id: 'tradingview',
  name: 'Tradingview',
  description: 'Integration with Tradingview for enhanced workflow automation',
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
  tags: ['tradingview'],
};

export default TRADINGVIEW;
