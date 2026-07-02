import { Integration, Primitive } from '../../src/types/integration';

/**
 * Google Ai Integration
 * Phase 6 - Ai Language Models
 */
export const GOOGLE_AI: Integration = {
  id: 'google-ai',
  name: 'Google Ai',
  description: 'Integration with Google Ai for enhanced workflow automation',
  category: 'Ai Language Models',
  categoryId: 'ai-language-models',
  phaseNumber: 6,
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
  tags: ['google-ai'],
};

export default GOOGLE_AI;
