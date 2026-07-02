/**
 * Strapi Integration Types
 */

export interface STRAPIConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface STRAPIRequest {
  action: string;
  payload: any;
}

export interface STRAPIResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface STRAPIEvent {
  type: string;
  timestamp: Date;
  data: any;
}
