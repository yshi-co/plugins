/**
 * Webflow Integration Types
 */

export interface WEBFLOWConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface WEBFLOWRequest {
  action: string;
  payload: any;
}

export interface WEBFLOWResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface WEBFLOWEvent {
  type: string;
  timestamp: Date;
  data: any;
}
