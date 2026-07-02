import { Integration, Primitive } from '../../src/types/integration';

/**
 * Defi Protocol Integration
 * Phase 7 - Finance Crypto
 */
export const DEFI_PROTOCOL: Integration = {
  id: 'defi-protocol',
  name: 'Defi Protocol',
  description: 'Integration with Defi Protocol for enhanced workflow automation',
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
  tags: ['defi-protocol'],
};

export default DEFI_PROTOCOL;
