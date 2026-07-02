import { Integration, Primitive } from '../../../src/types/integration';

/**
 * WordPress Integration
 * Connects Yshi with WordPress sites for content management and automation
 * Supports blog publishing, content workflows, and site management
 */
export const WORDPRESS: Integration = {
  id: 'wordpress',
  name: 'WordPress',
  description: 'Content management system integration for blog publishing, site automation, and content workflows',
  category: 'Content Management',
  categoryId: 'content-management',
  phaseNumber: 4,
  status: 'Planning',

  // API Primitives used by this integration
  primitives: [
    Primitive.BotWebhooks,
    Primitive.MiniApps,
    Primitive.OIDCOAuth,
  ],

  // Use cases and features
  useCases: [
    {
      title: 'Automated Blog Publishing',
      description: 'Publish blog posts directly from Yshi bot to WordPress sites with automatic formatting and SEO optimization',
      primitives: [Primitive.BotWebhooks, Primitive.OIDCOAuth],
    },
    {
      title: 'Content Moderation Workflows',
      description: 'Set up automated content moderation pipelines with comment filtering, spam detection, and approval workflows',
      primitives: [Primitive.BotWebhooks],
    },
    {
      title: 'Site Analytics Dashboard',
      description: 'Display WordPress site analytics, traffic insights, and content performance metrics in a Mini App dashboard',
      primitives: [Primitive.MiniApps],
    },
    {
      title: 'Content Scheduling',
      description: 'Schedule blog posts, pages, and media uploads using natural language commands and calendar integration',
      primitives: [Primitive.BotWebhooks, Primitive.MiniApps],
    },
    {
      title: 'User Management',
      description: 'Manage WordPress user roles, permissions, and access control through OAuth-based authentication',
      primitives: [Primitive.OIDCOAuth],
    },
  ],

  // API documentation
  apiDocUrl: 'https://developer.wordpress.com/docs/api/',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '3-4 weeks',
  dependencies: ['oauth-provider', 'webhook-system'],
  tags: ['cms', 'blogging', 'content', 'publishing', 'automation', 'wordpress.com'],
};
