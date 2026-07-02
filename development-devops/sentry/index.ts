import { Integration, Primitive } from '../../src/types/integration';

/**
 * Sentry Integration
 * Phase 1 - Development Devops
 */
export const SENTRY: Integration = {
  id: 'sentry',
  name: 'Sentry',
  description: 'Integration with Sentry for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.example.com',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['sentry'],
};

export default SENTRY;
