import { Integration, Primitive } from '../../src/types/integration';

/**
 * Pipedrive Integration
 * Phase 2 - Crm Sales
 */
export const PIPEDRIVE: Integration = {
  id: 'pipedrive',
  name: 'Pipedrive',
  description: 'Integration with Pipedrive for enhanced workflow automation',
  category: 'Crm Sales',
  categoryId: 'crm-sales',
  phaseNumber: 2,
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
  tags: ['pipedrive'],
};

export default PIPEDRIVE;
