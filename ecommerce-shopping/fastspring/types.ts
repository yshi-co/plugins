/**
 * Fastspring Integration Types
 */

export interface FASTSPRINGConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface FASTSPRINGRequest {
  action: string;
  payload: any;
}

export interface FASTSPRINGResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface FASTSPRINGEvent {
  type: string;
  timestamp: Date;
  data: any;
}
