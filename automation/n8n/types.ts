/**
 * N8n Integration Types
 */

export interface N8NConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface N8NRequest {
  action: string;
  payload: any;
}

export interface N8NResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface N8NEvent {
  type: string;
  timestamp: Date;
  data: any;
}
