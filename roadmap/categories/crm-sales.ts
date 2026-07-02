/**
 * Category Index for CRM & Sales
 * Phase: 2
 * Total Integrations: 8
 * Folder Structure: /src/core/api/crm-sales/
 */

import { Category } from '../../src/types/integration';

export const CRM_SALES: Category = {
  id: 'crm-sales',
  name: 'CRM & Sales',
  emoji: '💼',
  phaseNumber: 2,
  description: 'Customer relationship management and sales automation',
  folder: '/src/core/api/crm-sales/',
  integrationCount: 8,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Salesforce, HubSpot, Pipedrive, Zoho CRM, Freshsales, Insightly, Vtiger, Odoo
 */

export default CRM_SALES;
