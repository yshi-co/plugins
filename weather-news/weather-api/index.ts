import { Integration, Primitive } from '../../src/types/integration';

/**
 * Weather Api Integration
 * Phase 19 - Weather News
 */
export const WEATHER_API: Integration = {
  id: 'weather-api',
  name: 'Weather Api',
  description: 'Integration with Weather Api for enhanced workflow automation',
  category: 'Weather News',
  categoryId: 'weather-news',
  phaseNumber: 19,
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
  tags: ['weather-api'],
};

export default WEATHER_API;
