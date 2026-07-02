import { Integration, Primitive } from '../../src/types/integration';

/**
 * When2meet Integration
 * Phase 10 - Calendar Scheduling
 */
export const WHEN2MEET: Integration = {
  id: 'when2meet',
  name: 'When2meet',
  description: 'Integration with When2meet for enhanced workflow automation',
  category: 'Calendar Scheduling',
  categoryId: 'calendar-scheduling',
  phaseNumber: 10,
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
  tags: ['when2meet'],
};

export default WHEN2MEET;
