import { Integration, Primitive } from '../../src/types/integration';

/**
 * Pagerduty Integration
 * Phase 1 - Development Devops
 */
export const PAGERDUTY: Integration = {
  id: 'pagerduty',
  name: 'Pagerduty',
  description: 'Integration with Pagerduty for enhanced workflow automation',
  category: 'Development Devops',
  categoryId: 'development-devops',
  phaseNumber: 1,
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
  tags: ['pagerduty'],
};

export default PAGERDUTY;
