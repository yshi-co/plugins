import { Integration, Primitive } from '../../src/types/integration';

/**
 * Google Drive Integration
 * Phase 5 - Cloud Storage
 */
export const GOOGLE_DRIVE: Integration = {
  id: 'google-drive',
  name: 'Google Drive',
  description: 'Integration with Google Drive for enhanced workflow automation',
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
  apiDocUrl: 'https://docs.example.com',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: [],
  tags: ['google-drive'],
};

export default GOOGLE_DRIVE;
