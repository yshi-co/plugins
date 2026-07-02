import { Integration, Primitive } from '../../src/types/integration';

/**
 * Notion Tables Integration
 * Phase 9 - Productivity Collaboration
 */
export const NOTION_TABLES: Integration = {
  id: 'notion-tables',
  name: 'Notion Tables',
  description: 'Integration with Notion Tables for enhanced workflow automation',
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
  tags: ['notion-tables'],
};

export default NOTION_TABLES;
