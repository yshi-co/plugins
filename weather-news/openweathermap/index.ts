import { Integration, Primitive } from '../../src/types/integration';

/**
 * Openweathermap Integration
 * Phase 19 - Weather News
 */
export const OPENWEATHERMAP: Integration = {
  id: 'openweathermap',
  name: 'Openweathermap',
  description: 'Integration with Openweathermap for enhanced workflow automation',
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
  tags: ['openweathermap'],
};

export default OPENWEATHERMAP;
