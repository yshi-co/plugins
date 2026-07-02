import { Integration, Primitive } from '../../src/types/integration';

/**
 * Notion Database Integration
 * Phase 9 - Productivity Collaboration
 */
export const NOTION_DATABASE: Integration = {
  id: 'notion-database',
  name: 'Notion Database',
  description: 'Integration with Notion Database for enhanced workflow automation',
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
  tags: ['notion-database'],
};

export default NOTION_DATABASE;
