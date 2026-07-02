/**
 * Binance Integration Types
 */

export interface BINANCEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface BINANCERequest {
  action: string;
  payload: any;
}

export interface BINANCEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface BINANCEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
