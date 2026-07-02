import { Integration, Primitive } from '../../src/types/integration';

/**
 * Sentry Monitoring Integration
 * Phase 12 - Monitoring Observability
 */
export const SENTRY_MONITORING: Integration = {
  id: 'sentry-monitoring',
  name: 'Sentry Monitoring',
  description: 'Integration with Sentry Monitoring for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.example.com',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['sentry-monitoring'],
};

export default SENTRY_MONITORING;
