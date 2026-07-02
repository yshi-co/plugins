/**
 * Tradingview Integration Types
 */

export interface TRADINGVIEWConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface TRADINGVIEWRequest {
  action: string;
  payload: any;
}

export interface TRADINGVIEWResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface TRADINGVIEWEvent {
  type: string;
  timestamp: Date;
  data: any;
}
