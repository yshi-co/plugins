import { Integration, Primitive } from '../../src/types/integration';

/**
 * Notion Integration
 * Phase 9 - Productivity Collaboration
 */
export const NOTION: Integration = {
  id: 'notion',
  name: 'Notion',
  description: 'Integration with Notion for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.yshi.co',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['notion'],
};

export default NOTION;
