import { Integration, Primitive } from '../../src/types/integration';

/**
 * Mailchimp Integration
 * Phase 16 - Email Marketing
 */
export const MAILCHIMP: Integration = {
  id: 'mailchimp',
  name: 'Mailchimp',
  description: 'Integration with Mailchimp for enhanced workflow automation',
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
  tags: ['mailchimp'],
};

export default MAILCHIMP;
