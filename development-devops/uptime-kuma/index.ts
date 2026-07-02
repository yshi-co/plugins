import { Integration, Primitive } from '../../src/types/integration';

/**
 * Uptime Kuma Integration
 * Phase 1 - Development Devops
 */
export const UPTIME_KUMA: Integration = {
  id: 'uptime-kuma',
  name: 'Uptime Kuma',
  description: 'Integration with Uptime Kuma for enhanced workflow automation',
  category: 'Development Devops',
  categoryId: 'development-devops',
  phaseNumber: 1,
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
  tags: ['uptime-kuma'],
};

export default UPTIME_KUMA;
