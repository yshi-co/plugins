import { Integration, Primitive } from '../../src/types/integration';

/**
 * Monday Crm Integration
 * Phase 9 - Productivity Collaboration
 */
export const MONDAY_CRM: Integration = {
  id: 'monday-crm',
  name: 'Monday Crm',
  description: 'Integration with Monday Crm for enhanced workflow automation',
  category: 'Productivity Collaboration',
  categoryId: 'productivity-collaboration',
  phaseNumber: 9,
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
  tags: ['monday-crm'],
};

export default MONDAY_CRM;
