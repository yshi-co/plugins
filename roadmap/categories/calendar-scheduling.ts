/**
 * Category Index for Calendar & Scheduling
 * Phase: 10
 * Total Integrations: 7
 * Folder Structure: /src/core/api/calendar-scheduling/
 */

import { Category } from '../../src/types/integration';

export const CALENDAR_SCHEDULING: Category = {
  id: 'calendar-scheduling',
  name: 'Calendar & Scheduling',
  emoji: '📅',
  phaseNumber: 10,
  description: 'Calendar management, appointment booking, and scheduling',
  folder: '/src/core/api/calendar-scheduling/',
  integrationCount: 7,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Google Calendar, Outlook Calendar, Apple Calendar, Calendly, Doodle, Acuity, Setmore
 */

export default CALENDAR_SCHEDULING;
