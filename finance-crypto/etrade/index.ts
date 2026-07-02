import { Integration, Primitive } from '../../src/types/integration';

/**
 * Etrade Integration
 * Phase 7 - Finance Crypto
 */
export const ETRADE: Integration = {
  id: 'etrade',
  name: 'Etrade',
  description: 'Integration with Etrade for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.example.com',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['etrade'],
};

export default ETRADE;
