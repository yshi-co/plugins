import { Integration, Primitive } from '../../src/types/integration';

/**
 * Bitbucket Integration
 * Phase 1 - Development Devops
 */
export const BITBUCKET: Integration = {
  id: 'bitbucket',
  name: 'Bitbucket',
  description: 'Integration with Bitbucket for enhanced workflow automation',
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
  tags: ['bitbucket'],
};

export default BITBUCKET;
