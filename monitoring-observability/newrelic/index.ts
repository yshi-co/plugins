import { Integration, Primitive } from '../../src/types/integration';

/**
 * Newrelic Integration
 * Phase 12 - Monitoring Observability
 */
export const NEWRELIC: Integration = {
  id: 'newrelic',
  name: 'Newrelic',
  description: 'Integration with Newrelic for enhanced workflow automation',
  category: 'Monitoring Observability',
  categoryId: 'monitoring-observability',
  phaseNumber: 12,
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
  tags: ['newrelic'],
};

export default NEWRELIC;
