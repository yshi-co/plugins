import { Integration, Primitive } from '../../src/types/integration';

/**
 * Transifex Integration
 * Phase 18 - Translation Localization
 */
export const TRANSIFEX: Integration = {
  id: 'transifex',
  name: 'Transifex',
  description: 'Integration with Transifex for enhanced workflow automation',
  category: 'Translation Localization',
  categoryId: 'translation-localization',
  phaseNumber: 18,
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
  tags: ['transifex'],
};

export default TRANSIFEX;
