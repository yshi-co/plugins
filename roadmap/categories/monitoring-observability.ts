/**
 * Category Index for Monitoring & Observability
 * Phase: 12
 * Total Integrations: 8
 * Folder Structure: /src/core/api/monitoring-observability/
 */

import { Category } from '../../src/types/integration';

export const MONITORING_OBSERVABILITY: Category = {
  id: 'monitoring-observability',
  name: 'Monitoring & Observability',
  emoji: '📊',
  phaseNumber: 12,
  description: 'System monitoring, logging, and observability platforms',
  folder: '/src/core/api/monitoring-observability/',
  integrationCount: 8,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: PagerDuty, Sentry, New Relic, DataDog, Grafana, Prometheus, ELK Stack, Splunk
 */

export default MONITORING_OBSERVABILITY;
