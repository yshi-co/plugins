/**
 * Category Index for Gaming & Entertainment
 * Phase: 14
 * Total Integrations: 9
 * Folder Structure: /gaming-entertainment/
 */

import { Category } from '../../src/types/integration';
import { STEAM } from '../../gaming-entertainment/steam/index';
import { TWITCH } from '../../gaming-entertainment/twitch/index';
import { DISCORD } from '../../gaming-entertainment/discord/index';
import { ROBLOX } from '../../gaming-entertainment/roblox/index';
import { EPIC_GAMES } from '../../gaming-entertainment/epic-games/index';
import { GOG } from '../../gaming-entertainment/gog/index';
import { POKER_P2P } from '../../gaming-entertainment/poker-p2p/index';
import { CHESS_P2P } from '../../gaming-entertainment/chess-p2p/index';
import { TONGITS_P2P } from '../../gaming-entertainment/tongits-p2p/index';

export const GAMING_ENTERTAINMENT: Category = {
  id: 'gaming-entertainment',
  name: 'Gaming & Entertainment',
  emoji: '🎮',
  phaseNumber: 14,
  description: 'Gaming platforms, streaming, entertainment, and P2P games',
  folder: '/gaming-entertainment/',
  integrationCount: 9,
  integrations: [
    STEAM,
    TWITCH,
    DISCORD,
    ROBLOX,
    EPIC_GAMES,
    GOG,
    POKER_P2P,
    CHESS_P2P,
    TONGITS_P2P,
  ],
  status: 'Planning' as const
};

/**
 * Integrations:
 * - Steam (Game Distribution)
 * - Twitch (Live Streaming)
 * - Discord (Gaming Chat & Community)
 * - Roblox (3D Gaming Platform)
 * - Epic Games (Game Launcher)
 * - GOG (DRM-Free Games)
 * - Poker P2P (Real-time P2P Poker)
 * - Chess P2P (Real-time P2P Chess)
 * - Tongits P2P (Philippine Card Game)
 */

export default GAMING_ENTERTAINMENT;
