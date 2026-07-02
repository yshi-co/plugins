/**
 * Category Index for Automation & Workflow Platforms
 * Phase: 17
 * Total Integrations: 5
 * Folder Structure: /src/core/api/automation/
 */

import { Category } from '../../src/types/integration';

export const AUTOMATION: Category = {
  id: 'automation',
  name: 'Automation & Workflow Platforms',
  emoji: '⚙️',
  phaseNumber: 17,
  description: 'Workflow automation and no-code automation platforms',
  folder: '/src/core/api/automation/',
  integrationCount: 5,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Zapier, IFTTT, Make.com, n8n, Integromat
 */

export default AUTOMATION;
