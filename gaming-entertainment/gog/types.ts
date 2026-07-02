/**
 * Gog Integration Types
 */

export interface GOGConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface GOGRequest {
  action: string;
  payload: any;
}

export interface GOGResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface GOGEvent {
  type: string;
  timestamp: Date;
  data: any;
}
