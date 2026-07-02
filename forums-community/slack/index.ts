import { Integration, Primitive } from '../../src/types/integration';

/**
 * Slack Integration
 * Phase 13 - Forums Community
 */
export const SLACK: Integration = {
  id: 'slack',
  name: 'Slack',
  description: 'Integration with Slack for enhanced workflow automation',
  category: 'Forums Community',
  categoryId: 'forums-community',
  phaseNumber: 13,
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
  tags: ['slack'],
};

export default SLACK;
