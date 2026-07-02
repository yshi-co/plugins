/**
 * Category Index for Finance & Cryptocurrency
 * Phase: 7
 * Total Integrations: 10
 * Folder Structure: /src/core/api/finance-crypto/
 */

import { Category } from '../../src/types/integration';
import { CRYPTO_PRICE_TRACKING } from '../../src/core/api/finance-crypto/crypto-price-tracking';

export const FINANCE_CRYPTO: Category = {
  id: 'finance-crypto',
  name: 'Finance & Cryptocurrency',
  emoji: '💰',
  phaseNumber: 7,
  description: 'Financial services, crypto trading, and crypto assets',
  folder: '/src/core/api/finance-crypto/',
  integrationCount: 10,
  integrations: [
    CRYPTO_PRICE_TRACKING
  ],
  status: 'Planning' as const
};

/**
 * Integrations: CoinGecko, Binance, Kraken, Coinbase, TradingView, DeFi, Wise, Square, QuickBooks, E*TRADE
 */

export default FINANCE_CRYPTO;
