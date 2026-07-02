/**
 * Category Index for Communication & Support
 * Phase: 11
 * Total Integrations: 10
 * Folder Structure: /src/core/api/communication-support/
 */

import { Category } from '../../src/types/integration';

export const COMMUNICATION_SUPPORT: Category = {
  id: 'communication-support',
  name: 'Communication & Support',
  emoji: '💬',
  phaseNumber: 11,
  description: 'Communication platforms and customer support systems',
  folder: '/src/core/api/communication-support/',
  integrationCount: 10,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Slack, Discord, Microsoft Teams, Zendesk, Intercom, Freshdesk, Help Scout, Drift, Front, Crisp
 */

export default COMMUNICATION_SUPPORT;
