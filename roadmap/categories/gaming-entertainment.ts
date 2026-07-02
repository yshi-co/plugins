/**
 * Category Index for Gaming & Entertainment
 * Phase: 14
 * Total Integrations: 6
 * Folder Structure: /src/core/api/gaming-entertainment/
 */

import { Category } from '../../src/types/integration';

export const GAMING_ENTERTAINMENT: Category = {
  id: 'gaming-entertainment',
  name: 'Gaming & Entertainment',
  emoji: '🎮',
  phaseNumber: 14,
  description: 'Gaming platforms, streaming, and entertainment',
  folder: '/src/core/api/gaming-entertainment/',
  integrationCount: 6,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Twitch, Steam, Discord Gaming, Chess.com, Roblox, Minecraft
 */

export default GAMING_ENTERTAINMENT;
