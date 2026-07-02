/**
 * Roadmap Categories Index
 * Central index for all 20 integration categories
 */

// Phase 1 - Development & DevOps
export { default as DEVELOPMENT_DEVOPS } from './development-devops';

// Phase 2 - CRM & Sales
export { default as CRM_SALES } from './crm-sales';

// Phase 3 - E-commerce & Payments
export { default as ECOMMERCE_SHOPPING } from './ecommerce-shopping';

// Phase 4 - Content & Community
export { default as CONTENT_MANAGEMENT } from './content-management';
export { default as SOCIAL_CONTENT } from './social-content';
export { default as FORUMS_COMMUNITY } from './forums-community';

// Phase 5 - Cloud Storage & Infrastructure
export { default as CLOUD_STORAGE } from './cloud-storage';

// Phase 6 - AI & Language Models
export { default as AI_LANGUAGE_MODELS } from './ai-language-models';

// Phase 7 - Finance & Cryptocurrency
export { default as FINANCE_CRYPTO } from './finance-crypto';

// Phase 8 - Social Media & Content Creators (duplicate for clarity)
// Included above

// Phase 9 - Productivity & Collaboration
export { default as PRODUCTIVITY_COLLABORATION } from './productivity-collaboration';

// Phase 10 - Calendar & Scheduling
export { default as CALENDAR_SCHEDULING } from './calendar-scheduling';

// Phase 11 - Communication & Support
export { default as COMMUNICATION_SUPPORT } from './communication-support';

// Phase 12 - Monitoring & Observability
export { default as MONITORING_OBSERVABILITY } from './monitoring-observability';

// Phase 13 - Forums & Community (duplicate for clarity)
// Included above

// Phase 14 - Gaming & Entertainment
export { default as GAMING_ENTERTAINMENT } from './gaming-entertainment';

// Phase 15 - Analytics & Business Intelligence
export { default as ANALYTICS_INTELLIGENCE } from './analytics-intelligence';

// Phase 16 - Email & Marketing Automation
export { default as EMAIL_MARKETING } from './email-marketing';

// Phase 17 - Automation & Workflow Platforms
export { default as AUTOMATION } from './automation';

// Phase 18 - Translation & Localization
export { default as TRANSLATION_LOCALIZATION } from './translation-localization';

// Phase 19 - Weather & News
export { default as WEATHER_NEWS } from './weather-news';

// Phase 20 - Maps & Location Services
export { default as MAPS_LOCATION } from './maps-location';

/**
 * Category array for iteration and type-safe access
 */
export const ALL_CATEGORIES = [
  'development-devops',
  'crm-sales',
  'ecommerce-shopping',
  'content-management',
  'social-content',
  'forums-community',
  'cloud-storage',
  'ai-language-models',
  'finance-crypto',
  'productivity-collaboration',
  'calendar-scheduling',
  'communication-support',
  'monitoring-observability',
  'gaming-entertainment',
  'analytics-intelligence',
  'email-marketing',
  'automation',
  'translation-localization',
  'weather-news',
  'maps-location'
];

export default {
  ALL_CATEGORIES
};
