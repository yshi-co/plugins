import { Integration, Primitive } from '../../src/types/integration';

/**
 * Make Integration
 * Phase 17 - Automation
 */
export const MAKE: Integration = {
  id: 'make',
  name: 'Make',
  description: 'Integration with Make for enhanced workflow automation',
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
  tags: ['make'],
};

export default MAKE;
