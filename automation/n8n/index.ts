import { Integration, Primitive } from '../../src/types/integration';

/**
 * N8n Integration
 * Phase 17 - Automation
 */
export const N8N: Integration = {
  id: 'n8n',
  name: 'N8n',
  description: 'Integration with N8n for enhanced workflow automation',
  category: 'Automation',
  categoryId: 'automation',
  phaseNumber: 17,
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
  tags: ['n8n'],
};

export default N8N;
