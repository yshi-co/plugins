import { Integration, Primitive } from '../../src/types/integration';

/**
 * Lokalise Integration
 * Phase 18 - Translation Localization
 */
export const LOKALISE: Integration = {
  id: 'lokalise',
  name: 'Lokalise',
  description: 'Integration with Lokalise for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.yshi.co',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['lokalise'],
};

export default LOKALISE;
