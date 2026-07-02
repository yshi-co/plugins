/**
 * Pagerduty Integration Types
 */

export interface PAGERDUTYConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface PAGERDUTYRequest {
  action: string;
  payload: any;
}

export interface PAGERDUTYResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface PAGERDUTYEvent {
  type: string;
  timestamp: Date;
  data: any;
}
