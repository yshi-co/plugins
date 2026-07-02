import { Integration, Primitive } from '../../src/types/integration';

/**
 * Backblaze Integration
 * Phase 5 - Cloud Storage
 */
export const BACKBLAZE: Integration = {
  id: 'backblaze',
  name: 'Backblaze',
  description: 'Integration with Backblaze for enhanced workflow automation',
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
  tags: ['backblaze'],
};

export default BACKBLAZE;
