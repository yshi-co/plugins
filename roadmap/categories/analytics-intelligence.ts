/**
 * Category Index for Analytics & Business Intelligence
 * Phase: 15
 * Total Integrations: 7
 * Folder Structure: /src/core/api/analytics-intelligence/
 */

import { Category } from '../../src/types/integration';

export const ANALYTICS_INTELLIGENCE: Category = {
  id: 'analytics-intelligence',
  name: 'Analytics & Business Intelligence',
  emoji: '📈',
  phaseNumber: 15,
  description: 'Analytics platforms and business intelligence tools',
  folder: '/src/core/api/analytics-intelligence/',
  integrationCount: 7,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Google Analytics, Mixpanel, Amplitude, Tableau, Power BI, Looker, Segment
 */

export default ANALYTICS_INTELLIGENCE;
