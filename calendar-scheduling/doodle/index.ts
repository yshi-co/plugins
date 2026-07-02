import { Integration, Primitive } from '../../src/types/integration';

/**
 * Doodle Integration
 * Phase 10 - Calendar Scheduling
 */
export const DOODLE: Integration = {
  id: 'doodle',
  name: 'Doodle',
  description: 'Integration with Doodle for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.example.com',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['doodle'],
};

export default DOODLE;
