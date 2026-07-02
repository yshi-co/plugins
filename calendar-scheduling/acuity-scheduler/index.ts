import { Integration, Primitive } from '../../src/types/integration';

/**
 * Acuity Scheduler Integration
 * Phase 10 - Calendar Scheduling
 */
export const ACUITY_SCHEDULER: Integration = {
  id: 'acuity-scheduler',
  name: 'Acuity Scheduler',
  description: 'Integration with Acuity Scheduler for enhanced workflow automation',
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
  tags: ['acuity-scheduler'],
};

export default ACUITY_SCHEDULER;
