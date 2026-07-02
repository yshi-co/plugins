/**
 * Crypto Price Tracking Integration Types
 */

export interface CRYPTO_PRICE_TRACKINGConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface CRYPTO_PRICE_TRACKINGRequest {
  action: string;
  payload: any;
}

export interface CRYPTO_PRICE_TRACKINGResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface CRYPTO_PRICE_TRACKINGEvent {
  type: string;
  timestamp: Date;
  data: any;
}
