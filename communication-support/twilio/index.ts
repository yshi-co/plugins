import { Integration, Primitive } from '../../src/types/integration';

/**
 * Twilio Integration
 * Phase 11 - Communication Support
 */
export const TWILIO: Integration = {
  id: 'twilio',
  name: 'Twilio',
  description: 'Integration with Twilio for enhanced workflow automation',
  category: 'Communication Support',
  categoryId: 'communication-support',
  phaseNumber: 11,
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
  tags: ['twilio'],
};

export default TWILIO;
