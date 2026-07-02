/**
 * Category Index for Content Management
 * Phase: 4
 * Total Integrations: 8
 * Folder Structure: /src/core/api/content-management/
 */

import { Category } from '../../src/types/integration';
import { WORDPRESS } from '../../src/core/api/content-management/wordpress';

export const CONTENT_MANAGEMENT: Category = {
  id: 'content-management',
  name: 'Content Management',
  emoji: '📝',
  phaseNumber: 4,
  description: 'Content platforms and publishing systems',
  folder: '/src/core/api/content-management/',
  integrationCount: 8,
  integrations: [
    WORDPRESS
  ],
  status: 'Planning' as const
};

/**
 * Integrations: WordPress, Ghost, Webflow, Wix, Contentful, Sanity, Strapi, Drupal
 */

export default CONTENT_MANAGEMENT;
