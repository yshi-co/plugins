/**
 * Category Index for Cloud Storage & Infrastructure
 * Phase: 5
 * Total Integrations: 8
 * Folder Structure: /src/core/api/cloud-storage/
 */

import { Category } from '../../src/types/integration';

export const CLOUD_STORAGE: Category = {
  id: 'cloud-storage',
  name: 'Cloud Storage & Infrastructure',
  emoji: '☁️',
  phaseNumber: 5,
  description: 'Cloud storage, data backup, and infrastructure services',
  folder: '/src/core/api/cloud-storage/',
  integrationCount: 8,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Google Drive, Dropbox, OneDrive, Nextcloud, Amazon S3, Box, Tresorit, AWS/Google Cloud
 */

export default CLOUD_STORAGE;
