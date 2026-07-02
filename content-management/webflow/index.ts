import { Integration, Primitive } from '../../src/types/integration';

/**
 * Webflow Integration
 * Phase 4 - Content Management
 */
export const WEBFLOW: Integration = {
  id: 'webflow',
  name: 'Webflow',
  description: 'Integration with Webflow for enhanced workflow automation',
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
  tags: ['webflow'],
};

export default WEBFLOW;
