/**
 * Category Index for Productivity & Collaboration
 * Phase: 9
 * Total Integrations: 15
 * Folder Structure: /src/core/api/productivity-collaboration/
 */

import { Category } from '../../src/types/integration';

export const PRODUCTIVITY_COLLABORATION: Category = {
  id: 'productivity-collaboration',
  name: 'Productivity & Collaboration',
  emoji: '👥',
  phaseNumber: 9,
  description: 'Project management, document collaboration, and teamwork',
  folder: '/src/core/api/productivity-collaboration/',
  integrationCount: 15,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Notion, Google Workspace, Microsoft 365, Asana, Monday.com, ClickUp, Trello, Jira, Linear, Basecamp, Figma, GitHub Projects, Miro, Airtable, Zapier
 */

export default PRODUCTIVITY_COLLABORATION;
