import { Integration, Primitive } from '../../src/types/integration';

/**
 * Strapi Integration
 * Phase 4 - Content Management
 */
export const STRAPI: Integration = {
  id: 'strapi',
  name: 'Strapi',
  description: 'Integration with Strapi for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.example.com',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['strapi'],
};

export default STRAPI;
