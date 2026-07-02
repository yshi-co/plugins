import { Integration, Primitive } from '../../src/types/integration';

/**
 * Anthropic Integration
 * Phase 6 - Ai Language Models
 */
export const ANTHROPIC: Integration = {
  id: 'anthropic',
  name: 'Anthropic',
  description: 'Integration with Anthropic for enhanced workflow automation',
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
  tags: ['anthropic'],
};

export default ANTHROPIC;
