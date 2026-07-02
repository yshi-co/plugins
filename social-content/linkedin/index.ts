import { Integration, Primitive } from '../../src/types/integration';

/**
 * Linkedin Integration
 * Phase 4 - Social Content
 */
export const LINKEDIN: Integration = {
  id: 'linkedin',
  name: 'Linkedin',
  description: 'Integration with Linkedin for enhanced workflow automation',
  category: 'Social Content',
  categoryId: 'social-content',
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
  tags: ['linkedin'],
};

export default LINKEDIN;
