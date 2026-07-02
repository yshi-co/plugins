import { Integration, Primitive } from '../../src/types/integration';

/**
 * Aws S3 Integration
 * Phase 5 - Cloud Storage
 */
export const AWS_S3: Integration = {
  id: 'aws-s3',
  name: 'Aws S3',
  description: 'Integration with Aws S3 for enhanced workflow automation',
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
  tags: ['aws-s3'],
};

export default AWS_S3;
