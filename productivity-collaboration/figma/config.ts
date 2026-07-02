/**
 * Figma Integration Configuration
 */

export const FIGMA_CONFIG = {
  // API Configuration
  baseUrl: process.env.FIGMA_BASE_URL || 'https://api.example.com',
  apiVersion: 'v1',
  
  // Authentication
  auth: {
    type: 'Bearer', // Bearer, Basic, OAuth2, etc.
    headerName: 'Authorization',
  },
  
  // Timeout settings (in milliseconds)
  timeout: 30000,
  
  // Retry configuration
  retry: {
    maxAttempts: 3,
    backoffMultiplier: 2,
    initialDelay: 1000,
  },
  
  // Rate limiting
  rateLimit: {
    requestsPerSecond: 10,
    burstSize: 20,
  },
  
  // Webhook configuration
  webhook: {
    path: '/webhook/figma',
    secret: process.env.FIGMA_WEBHOOK_SECRET,
    timeout: 5000,
  },
  
  // Feature flags
  features: {
    webhooks: true,
    miniApp: true,
    oauth: true,
    pointsSystem: false,
  },
};

export default FIGMA_CONFIG;
