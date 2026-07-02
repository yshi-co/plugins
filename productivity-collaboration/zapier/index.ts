import { Integration, Primitive } from '../../src/types/integration';

/**
 * Zapier Integration
 * Phase 9 - Productivity Collaboration
 */
export const ZAPIER: Integration = {
  id: 'zapier',
  name: 'Zapier',
  description: 'Integration with Zapier for enhanced workflow automation',
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
  tags: ['zapier'],
};

export default ZAPIER;
