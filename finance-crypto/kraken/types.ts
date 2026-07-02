/**
 * Kraken Integration Types
 */

export interface KRAKENConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface KRAKENRequest {
  action: string;
  payload: any;
}

export interface KRAKENResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface KRAKENEvent {
  type: string;
  timestamp: Date;
  data: any;
}
