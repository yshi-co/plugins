import { Integration, Primitive } from '../../src/types/integration';

/**
 * Automate.io Integration
 * Phase 17 - Automation
 */
export const AUTOMATE.IO: Integration = {
  id: 'automate.io',
  name: 'Automate.io',
  description: 'Integration with Automate.io for enhanced workflow automation',
  category: 'Automation',
  categoryId: 'automation',
  phaseNumber: 17,
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
  tags: ['automate.io'],
};

export default AUTOMATE.IO;
