import { Integration, Primitive } from '../../src/types/integration';

/**
 * Klaviyo Integration
 * Phase 16 - Email Marketing
 */
export const KLAVIYO: Integration = {
  id: 'klaviyo',
  name: 'Klaviyo',
  description: 'Integration with Klaviyo for enhanced workflow automation',
  category: 'Email Marketing',
  categoryId: 'email-marketing',
  phaseNumber: 16,
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
  tags: ['klaviyo'],
};

export default KLAVIYO;
