import { Integration, Primitive } from '../../src/types/integration';

/**
 * Mautic Integration
 * Phase 16 - Email Marketing
 */
export const MAUTIC: Integration = {
  id: 'mautic',
  name: 'Mautic',
  description: 'Integration with Mautic for enhanced workflow automation',
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
  tags: ['mautic'],
};

export default MAUTIC;
