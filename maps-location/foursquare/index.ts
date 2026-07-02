import { Integration, Primitive } from '../../src/types/integration';

/**
 * Foursquare Integration
 * Phase 20 - Maps Location
 */
export const FOURSQUARE: Integration = {
  id: 'foursquare',
  name: 'Foursquare',
  description: 'Integration with Foursquare for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.example.com',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['foursquare'],
};

export default FOURSQUARE;
