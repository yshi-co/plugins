import { Integration, Primitive } from '../../src/types/integration';

/**
 * Sanity Integration
 * Phase 4 - Content Management
 */
export const SANITY: Integration = {
  id: 'sanity',
  name: 'Sanity',
  description: 'Integration with Sanity for enhanced workflow automation',
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
  tags: ['sanity'],
};

export default SANITY;
