/**
 * Category Index for Email & Marketing Automation
 * Phase: 16
 * Total Integrations: 7
 * Folder Structure: /src/core/api/email-marketing/
 */

import { Category } from '../../src/types/integration';

export const EMAIL_MARKETING: Category = {
  id: 'email-marketing',
  name: 'Email & Marketing Automation',
  emoji: '✉️',
  phaseNumber: 16,
  description: 'Email marketing and marketing automation platforms',
  folder: '/src/core/api/email-marketing/',
  integrationCount: 7,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Mailchimp, ConvertKit, ActiveCampaign, GetResponse, Brevo, MailerLite, Campaign Monitor
 */

export default EMAIL_MARKETING;
