import { Integration, Primitive } from '../../src/types/integration';

/**
 * Elastic Stack Integration
 * Phase 12 - Monitoring Observability
 */
export const ELASTIC_STACK: Integration = {
  id: 'elastic-stack',
  name: 'Elastic Stack',
  description: 'Integration with Elastic Stack for enhanced workflow automation',
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
  tags: ['elastic-stack'],
};

export default ELASTIC_STACK;
