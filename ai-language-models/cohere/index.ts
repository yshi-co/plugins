import { Integration, Primitive } from '../../src/types/integration';

/**
 * Cohere Integration
 * Phase 6 - Ai Language Models
 */
export const COHERE: Integration = {
  id: 'cohere',
  name: 'Cohere',
  description: 'Integration with Cohere for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.example.com',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['cohere'],
};

export default COHERE;
