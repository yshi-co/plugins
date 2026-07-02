import { Integration, Primitive } from '../../src/types/integration';

/**
 * Quickbooks Integration
 * Phase 7 - Finance Crypto
 */
export const QUICKBOOKS: Integration = {
  id: 'quickbooks',
  name: 'Quickbooks',
  description: 'Integration with Quickbooks for enhanced workflow automation',
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
  tags: ['quickbooks'],
};

export default QUICKBOOKS;
