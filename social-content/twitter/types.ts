/**
 * Twitter Integration Types
 */

export interface TWITTERConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface TWITTERRequest {
  action: string;
  payload: any;
}

export interface TWITTERResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface TWITTEREvent {
  type: string;
  timestamp: Date;
  data: any;
}
