/**
 * Category Index for E-commerce & Payments
 * Phase: 3
 * Total Integrations: 10
 * Folder Structure: /src/core/api/ecommerce-shopping/
 */

import { Category } from '../../src/types/integration';

export const ECOMMERCE_SHOPPING: Category = {
  id: 'ecommerce-shopping',
  name: 'E-commerce & Payments',
  emoji: '🛒',
  phaseNumber: 3,
  description: 'Online stores, payment processing, and transaction management',
  folder: '/src/core/api/ecommerce-shopping/',
  integrationCount: 10,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Shopify, WooCommerce, Magento, BigCommerce, Stripe, PayPal, Square, Amazon, Etsy, Printful
 */

export default ECOMMERCE_SHOPPING;
