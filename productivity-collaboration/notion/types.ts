/**
 * Notion Integration Types
 */

export interface NOTIONConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface NOTIONRequest {
  action: string;
  payload: any;
}

export interface NOTIONResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface NOTIONEvent {
  type: string;
  timestamp: Date;
  data: any;
}
