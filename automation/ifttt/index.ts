import { Integration, Primitive } from '../../src/types/integration';

/**
 * Ifttt Integration
 * Phase 17 - Automation
 */
export const IFTTT: Integration = {
  id: 'ifttt',
  name: 'Ifttt',
  description: 'Integration with Ifttt for enhanced workflow automation',
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
  tags: ['ifttt'],
};

export default IFTTT;
