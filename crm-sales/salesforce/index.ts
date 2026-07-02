import { Integration, Primitive } from '../../src/types/integration';

/**
 * Salesforce Integration
 * Phase 2 - Crm Sales
 */
export const SALESFORCE: Integration = {
  id: 'salesforce',
  name: 'Salesforce',
  description: 'Integration with Salesforce for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.yshi.co',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['salesforce'],
};

export default SALESFORCE;
