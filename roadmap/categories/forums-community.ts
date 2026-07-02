/**
 * Category Index for Forums & Community
 * Phase: 13
 * Total Integrations: 6
 * Folder Structure: /src/core/api/forums-community/
 */

import { Category } from '../../src/types/integration';

export const FORUMS_COMMUNITY: Category = {
  id: 'forums-community',
  name: 'Forums & Community Platforms',
  emoji: '🌐',
  phaseNumber: 13,
  description: 'Community forums and discussion platforms',
  folder: '/src/core/api/forums-community/',
  integrationCount: 6,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Discourse, Reddit, XenForo, vBulletin, Mighty Networks, Slack Communities
 */

export default FORUMS_COMMUNITY;
