import { Integration, Primitive } from '../../src/types/integration';

/**
 * Matrix Integration
 * Phase 13 - Forums Community
 */
export const MATRIX: Integration = {
  id: 'matrix',
  name: 'Matrix',
  description: 'Integration with Matrix for enhanced workflow automation',
  category: 'Forums Community',
  categoryId: 'forums-community',
  phaseNumber: 13,
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
  tags: ['matrix'],
};

export default MATRIX;
