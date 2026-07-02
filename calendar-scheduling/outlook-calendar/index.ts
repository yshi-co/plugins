import { Integration, Primitive } from '../../src/types/integration';

/**
 * Outlook Calendar Integration
 * Phase 10 - Calendar Scheduling
 */
export const OUTLOOK_CALENDAR: Integration = {
  id: 'outlook-calendar',
  name: 'Outlook Calendar',
  description: 'Integration with Outlook Calendar for enhanced workflow automation',
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
  tags: ['outlook-calendar'],
};

export default OUTLOOK_CALENDAR;
