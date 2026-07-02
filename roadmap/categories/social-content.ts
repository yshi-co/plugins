/**
 * Category Index for Social Media & Content
 * Phase: 4 & 8
 * Total Integrations: 10
 * Folder Structure: /src/core/api/social-content/
 */

import { Category } from '../../src/types/integration';

export const SOCIAL_CONTENT: Category = {
  id: 'social-content',
  name: 'Social Media & Content Creators',
  emoji: '📱',
  phaseNumber: 8,
  description: 'Social networks, creators, and content monetization',
  folder: '/src/core/api/social-content/',
  integrationCount: 10,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Twitter/X, YouTube, Instagram, TikTok, LinkedIn, Medium, Substack, Patreon, Twitch, Behance
 */

export default SOCIAL_CONTENT;
