import { Integration, Primitive } from '../../src/types/integration';

/**
 * Instagram Integration
 * Phase 4 - Social Content
 */
export const INSTAGRAM: Integration = {
  id: 'instagram',
  name: 'Instagram',
  description: 'Integration with Instagram for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.example.com',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['instagram'],
};

export default INSTAGRAM;
