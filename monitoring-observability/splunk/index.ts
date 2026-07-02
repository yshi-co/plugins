import { Integration, Primitive } from '../../src/types/integration';

/**
 * Splunk Integration
 * Phase 12 - Monitoring Observability
 */
export const SPLUNK: Integration = {
  id: 'splunk',
  name: 'Splunk',
  description: 'Integration with Splunk for enhanced workflow automation',
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
  tags: ['splunk'],
};

export default SPLUNK;
