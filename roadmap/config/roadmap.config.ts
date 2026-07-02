/**
 * Roadmap Configuration & Central Source of Truth
 * Defines all phases, categories, and integrations with their metadata
 */

import { Category, Phase, RoadmapMetadata } from '../types/integration';

export const PHASES: Record<number, Phase> = {
  1: {
    number: 1,
    name: 'Development & DevOps',
    description: 'Foundation integrations for developers and infrastructure teams',
    categories: ['development-devops'],
    totalIntegrations: 10,
    completed: 0,
    inProgress: 0,
    planned: 10,
    status: 'Planning' as const
  },
  2: {
    number: 2,
    name: 'CRM & Sales',
    description: 'Customer relationship management and sales automation',
    categories: ['crm-sales'],
    totalIntegrations: 8,
    completed: 0,
    inProgress: 0,
    planned: 8,
    status: 'Planning' as const
  },
  3: {
    number: 3,
    name: 'E-commerce & Payments',
    description: 'Online stores, payment processing, and transaction management',
    categories: ['ecommerce-shopping'],
    totalIntegrations: 10,
    completed: 0,
    inProgress: 0,
    planned: 10,
    status: 'Planning' as const
  },
  4: {
    number: 4,
    name: 'Content & Community',
    description: 'Content platforms, community forums, and customer support',
    categories: ['content-management', 'social-content', 'forums-community'],
    totalIntegrations: 18,
    completed: 0,
    inProgress: 0,
    planned: 18,
    status: 'Planning' as const
  },
  5: {
    number: 5,
    name: 'Cloud Storage & Infrastructure',
    description: 'Cloud storage, data backup, and infrastructure services',
    categories: ['cloud-storage'],
    totalIntegrations: 8,
    completed: 0,
    inProgress: 0,
    planned: 8,
    status: 'Planning' as const
  },
  6: {
    number: 6,
    name: 'AI & Language Models',
    description: 'Artificial intelligence, LLMs, and machine learning',
    categories: ['ai-language-models'],
    totalIntegrations: 7,
    completed: 0,
    inProgress: 0,
    planned: 7,
    status: 'Planning' as const
  },
  7: {
    number: 7,
    name: 'Finance & Cryptocurrency',
    description: 'Financial services, crypto trading, and crypto assets',
    categories: ['finance-crypto'],
    totalIntegrations: 10,
    completed: 0,
    inProgress: 0,
    planned: 10,
    status: 'Planning' as const
  },
  8: {
    number: 8,
    name: 'Social Media & Content Creators',
    description: 'Social networks, creators, and content monetization',
    categories: ['social-content'],
    totalIntegrations: 10,
    completed: 0,
    inProgress: 0,
    planned: 10,
    status: 'Planning' as const
  },
  9: {
    number: 9,
    name: 'Productivity & Collaboration',
    description: 'Project management, document collaboration, and teamwork',
    categories: ['productivity-collaboration'],
    totalIntegrations: 15,
    completed: 0,
    inProgress: 0,
    planned: 15,
    status: 'Planning' as const
  },
  10: {
    number: 10,
    name: 'Calendar & Scheduling',
    description: 'Calendar management, appointment booking, and scheduling',
    categories: ['calendar-scheduling'],
    totalIntegrations: 7,
    completed: 0,
    inProgress: 0,
    planned: 7,
    status: 'Planning' as const
  },
  11: {
    number: 11,
    name: 'Communication & Support',
    description: 'Communication platforms and customer support systems',
    categories: ['communication-support'],
    totalIntegrations: 10,
    completed: 0,
    inProgress: 0,
    planned: 10,
    status: 'Planning' as const
  },
  12: {
    number: 12,
    name: 'Monitoring & Observability',
    description: 'System monitoring, logging, and observability platforms',
    categories: ['monitoring-observability'],
    totalIntegrations: 8,
    completed: 0,
    inProgress: 0,
    planned: 8,
    status: 'Planning' as const
  },
  13: {
    number: 13,
    name: 'Forums & Community Platforms',
    description: 'Community forums and discussion platforms',
    categories: ['forums-community'],
    totalIntegrations: 6,
    completed: 0,
    inProgress: 0,
    planned: 6,
    status: 'Planning' as const
  },
  14: {
    number: 14,
    name: 'Gaming & Entertainment',
    description: 'Gaming platforms, streaming, and entertainment',
    categories: ['gaming-entertainment'],
    totalIntegrations: 6,
    completed: 0,
    inProgress: 0,
    planned: 6,
    status: 'Planning' as const
  },
  15: {
    number: 15,
    name: 'Analytics & Business Intelligence',
    description: 'Analytics platforms and business intelligence tools',
    categories: ['analytics-intelligence'],
    totalIntegrations: 7,
    completed: 0,
    inProgress: 0,
    planned: 7,
    status: 'Planning' as const
  },
  16: {
    number: 16,
    name: 'Email & Marketing Automation',
    description: 'Email marketing and marketing automation platforms',
    categories: ['email-marketing'],
    totalIntegrations: 7,
    completed: 0,
    inProgress: 0,
    planned: 7,
    status: 'Planning' as const
  },
  17: {
    number: 17,
    name: 'Automation & Workflow Platforms',
    description: 'Workflow automation and no-code automation platforms',
    categories: ['automation'],
    totalIntegrations: 5,
    completed: 0,
    inProgress: 0,
    planned: 5,
    status: 'Planning' as const
  },
  18: {
    number: 18,
    name: 'Translation & Localization',
    description: 'Translation services and localization platforms',
    categories: ['translation-localization'],
    totalIntegrations: 4,
    completed: 0,
    inProgress: 0,
    planned: 4,
    status: 'Planning' as const
  },
  19: {
    number: 19,
    name: 'Weather & News',
    description: 'Weather data and news aggregation services',
    categories: ['weather-news'],
    totalIntegrations: 4,
    completed: 0,
    inProgress: 0,
    planned: 4,
    status: 'Planning' as const
  },
  20: {
    number: 20,
    name: 'Maps & Location Services',
    description: 'Mapping platforms and location-based services',
    categories: ['maps-location'],
    totalIntegrations: 4,
    completed: 0,
    inProgress: 0,
    planned: 4,
    status: 'Planning' as const
  }
};

export const CATEGORIES_METADATA: Record<string, { emoji: string; phase: number }> = {
  'development-devops': { emoji: '🔧', phase: 1 },
  'crm-sales': { emoji: '💼', phase: 2 },
  'ecommerce-shopping': { emoji: '🛒', phase: 3 },
  'content-management': { emoji: '📝', phase: 4 },
  'social-content': { emoji: '📱', phase: 4 },
  'cloud-storage': { emoji: '☁️', phase: 5 },
  'ai-language-models': { emoji: '🤖', phase: 6 },
  'finance-crypto': { emoji: '💰', phase: 7 },
  'productivity-collaboration': { emoji: '👥', phase: 9 },
  'calendar-scheduling': { emoji: '📅', phase: 10 },
  'communication-support': { emoji: '💬', phase: 11 },
  'monitoring-observability': { emoji: '📊', phase: 12 },
  'forums-community': { emoji: '🌐', phase: 13 },
  'gaming-entertainment': { emoji: '🎮', phase: 14 },
  'analytics-intelligence': { emoji: '📈', phase: 15 },
  'email-marketing': { emoji: '✉️', phase: 16 },
  'automation': { emoji: '⚙️', phase: 17 },
  'translation-localization': { emoji: '🌍', phase: 18 },
  'weather-news': { emoji: '🌤️', phase: 19 },
  'maps-location': { emoji: '🗺️', phase: 20 }
};

export const ROADMAP_METADATA: RoadmapMetadata = {
  version: '2.0.0',
  lastUpdated: '2026-07-02',
  totalPhases: 20,
  totalCategories: 20,
  totalIntegrations: 154,
  primitivesCoverage: {
    'Bot Webhooks': {
      usage: 140,
      percentage: 91
    },
    'Mini Apps': {
      usage: 95,
      percentage: 62
    },
    'OIDC OAuth': {
      usage: 45,
      percentage: 29
    },
    'Points System': {
      usage: 25,
      percentage: 16
    }
  }
};

export default {
  PHASES,
  CATEGORIES_METADATA,
  ROADMAP_METADATA
};
