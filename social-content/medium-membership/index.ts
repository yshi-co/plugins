import { Integration, Primitive } from '../../src/types/integration';

/**
 * Medium Membership Integration
 * Phase 4 - Social Content
 */
export const MEDIUM_MEMBERSHIP: Integration = {
  id: 'medium-membership',
  name: 'Medium Membership',
  description: 'Integration with Medium Membership for enhanced workflow automation',
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
  tags: ['medium-membership'],
};

export default MEDIUM_MEMBERSHIP;
