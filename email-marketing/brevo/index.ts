import { Integration, Primitive } from '../../src/types/integration';

/**
 * Brevo Integration
 * Phase 16 - Email Marketing
 */
export const BREVO: Integration = {
  id: 'brevo',
  name: 'Brevo',
  description: 'Integration with Brevo for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.example.com',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['brevo'],
};

export default BREVO;
