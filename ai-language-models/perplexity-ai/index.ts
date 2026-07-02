import { Integration, Primitive } from '../../src/types/integration';

/**
 * Perplexity Ai Integration
 * Phase 6 - Ai Language Models
 */
export const PERPLEXITY_AI: Integration = {
  id: 'perplexity-ai',
  name: 'Perplexity Ai',
  description: 'Integration with Perplexity Ai for enhanced workflow automation',
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
  tags: ['perplexity-ai'],
};

export default PERPLEXITY_AI;
