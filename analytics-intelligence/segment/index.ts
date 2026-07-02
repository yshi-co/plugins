import { Integration, Primitive } from '../../src/types/integration';

/**
 * Segment Integration
 * Phase 15 - Analytics Intelligence
 */
export const SEGMENT: Integration = {
  id: 'segment',
  name: 'Segment',
  description: 'Integration with Segment for enhanced workflow automation',
  category: 'Analytics Intelligence',
  categoryId: 'analytics-intelligence',
  phaseNumber: 15,
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
  tags: ['segment'],
};

export default SEGMENT;
