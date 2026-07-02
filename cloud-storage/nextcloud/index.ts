import { Integration, Primitive } from '../../src/types/integration';

/**
 * Nextcloud Integration
 * Phase 5 - Cloud Storage
 */
export const NEXTCLOUD: Integration = {
  id: 'nextcloud',
  name: 'Nextcloud',
  description: 'Integration with Nextcloud for enhanced workflow automation',
  category: 'Cloud Storage',
  categoryId: 'cloud-storage',
  phaseNumber: 5,
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
  tags: ['nextcloud'],
};

export default NEXTCLOUD;
