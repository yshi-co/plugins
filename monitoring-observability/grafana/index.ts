import { Integration, Primitive } from '../../src/types/integration';

/**
 * Grafana Integration
 * Phase 12 - Monitoring Observability
 */
export const GRAFANA: Integration = {
  id: 'grafana',
  name: 'Grafana',
  description: 'Integration with Grafana for enhanced workflow automation',
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
  tags: ['grafana'],
};

export default GRAFANA;
