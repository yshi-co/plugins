import { Integration, Primitive } from '../../src/types/integration';

/**
 * Together Ai Integration
 * Phase 6 - Ai Language Models
 */
export const TOGETHER_AI: Integration = {
  id: 'together-ai',
  name: 'Together Ai',
  description: 'Integration with Together Ai for enhanced workflow automation',
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
  tags: ['together-ai'],
};

export default TOGETHER_AI;
