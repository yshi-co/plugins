import { Integration, Primitive } from '../../../src/types/integration';

/**
 * Crypto Price Tracking Integration
 * Real-time cryptocurrency price monitoring, alerts, and portfolio tracking
 * Supports multiple exchanges and comprehensive market data
 */
export const CRYPTO_PRICE_TRACKING: Integration = {
  id: 'crypto-price-tracking',
  name: 'Crypto Price Tracking',
  description: 'Real-time cryptocurrency price monitoring, alerts, portfolio tracking, and market analytics',
  category: 'Finance & Cryptocurrency',
  categoryId: 'finance-crypto',
  phaseNumber: 7,
  status: 'Planning',

  // API Primitives used by this integration
  primitives: [
    Primitive.BotWebhooks,
    Primitive.MiniApps,
    Primitive.PointsSystem,
  ],

  // Use cases and features
  useCases: [
    {
      title: 'Real-Time Price Alerts',
      description: 'Receive instant notifications when cryptocurrency prices hit target levels, with customizable thresholds for individual coins',
      primitives: [Primitive.BotWebhooks],
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Display comprehensive crypto portfolio tracking with total value, gains/losses, and asset allocation in a Mini App',
      primitives: [Primitive.MiniApps],
    },
    {
      title: 'Market Insights',
      description: 'Analyze market trends, volatility patterns, and technical indicators across multiple cryptocurrencies and timeframes',
      primitives: [Primitive.MiniApps],
    },
    {
      title: 'Trading Rewards Program',
      description: 'Gamify trading activity with rewards points for completed trades, reaching targets, and market milestones',
      primitives: [Primitive.PointsSystem],
    },
    {
      title: 'Automated Price Reports',
      description: 'Generate and distribute daily/weekly price reports with custom coin selections, exchange data, and market summaries',
      primitives: [Primitive.BotWebhooks, Primitive.PointsSystem],
    },
  ],

  // API documentation
  apiDocUrl: 'https://docs.coingecko.com/v3.0.0/reference/introduction',
  
  // Implementation details
  difficulty: 'medium',
  estimatedEffort: '2-3 weeks',
  dependencies: ['price-data-provider', 'webhook-system', 'points-engine'],
  tags: ['crypto', 'finance', 'trading', 'alerts', 'analytics', 'portfolio', 'blockchain'],
};
