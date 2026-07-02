/**
 * Wix Integration Types
 */

export interface WIXConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface WIXRequest {
  action: string;
  payload: any;
}

export interface WIXResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface WIXEvent {
  type: string;
  timestamp: Date;
  data: any;
}
