import { Integration, Primitive } from '../../src/types/integration';

/**
 * Wordpress Integration
 * Phase 4 - Content Management
 */
export const WORDPRESS: Integration = {
  id: 'wordpress',
  name: 'Wordpress',
  description: 'Integration with Wordpress for enhanced workflow automation',
  category: 'Content Management',
  categoryId: 'content-management',
  phaseNumber: 4,
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
  tags: ['wordpress'],
};

export default WORDPRESS;
