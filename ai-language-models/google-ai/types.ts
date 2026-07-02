/**
 * Google Ai Integration Types
 */

export interface GOOGLE_AIConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface GOOGLE_AIRequest {
  action: string;
  payload: any;
}

export interface GOOGLE_AIResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface GOOGLE_AIEvent {
  type: string;
  timestamp: Date;
  data: any;
}
