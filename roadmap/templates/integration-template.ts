/**
 * Integration Template
 * Use this template as a skeleton for creating new integrations
 * Copy and modify for each new integration
 */

import { Integration, UseCase, Primitive } from '../../src/types/integration';

/**
 * Template Integration Definition
 * Replace INTEGRATION_NAME with actual integration name
 * Replace CATEGORY_ID with the actual category folder name
 * Replace PHASE_NUMBER with the phase number (1-20)
 */
export const INTEGRATION_TEMPLATE: Integration = {
  id: 'integration-name',
  name: 'Integration Name',
  description: 'Brief description of what this integration does',
  category: 'Category Name',
  categoryId: 'category-id',
  phaseNumber: 1,
  status: 'Planning' as const,
  
  // API Primitives used by this integration
  primitives: [
    Primitive.BotWebhooks,
    Primitive.MiniApps
  ],
  
  // Use cases and features
  useCases: [
    {
      title: 'Use Case 1',
      description: 'Description of the first use case',
      primitives: [Primitive.BotWebhooks]
    },
    {
      title: 'Use Case 2',
      description: 'Description of the second use case',
      primitives: [Primitive.MiniApps]
    },
    {
      title: 'Use Case 3',
      description: 'Description of the third use case',
      primitives: [Primitive.BotWebhooks, Primitive.MiniApps]
    }
  ],
  
  // Additional metadata
  apiDocUrl: 'https://docs.yshi.co',
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: ['dependency-1', 'dependency-2'],
  tags: ['tag-1', 'tag-2', 'tag-3']
};

/**
 * Usage Instructions:
 * 
 * 1. Copy this file to: roadmap/categories/{category-id}/{integration-name}.ts
 * 2. Update all template placeholders with actual values
 * 3. Ensure primitives array matches the integration's capabilities
 * 4. Add 3-5 detailed use cases with clear descriptions
 * 5. Set appropriate difficulty level (easy/medium/hard)
 * 6. Include dependencies if this integration relies on others
 * 7. Add relevant tags for filtering and categorization
 */
