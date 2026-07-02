import { Integration, Primitive } from '../../src/types/integration';

/**
 * Vtiger Integration
 * Phase 2 - Crm Sales
 */
export const VTIGER: Integration = {
  id: 'vtiger',
  name: 'Vtiger',
  description: 'Integration with Vtiger for enhanced workflow automation',
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
  tags: ['vtiger'],
};

export default VTIGER;
