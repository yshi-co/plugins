/**
 * Intercom Integration Types
 */

export interface INTERCOMConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface INTERCOMRequest {
  action: string;
  payload: any;
}

export interface INTERCOMResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface INTERCOMEvent {
  type: string;
  timestamp: Date;
  data: any;
}
