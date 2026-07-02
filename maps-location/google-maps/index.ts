import { Integration, Primitive } from '../../src/types/integration';

/**
 * Google Maps Integration
 * Phase 20 - Maps Location
 */
export const GOOGLE_MAPS: Integration = {
  id: 'google-maps',
  name: 'Google Maps',
  description: 'Integration with Google Maps for enhanced workflow automation',
  category: 'Maps Location',
  categoryId: 'maps-location',
  phaseNumber: 20,
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
  tags: ['google-maps'],
};

export default GOOGLE_MAPS;
