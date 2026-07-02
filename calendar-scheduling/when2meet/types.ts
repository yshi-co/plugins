/**
 * When2meet Integration Types
 */

export interface WHEN2MEETConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface WHEN2MEETRequest {
  action: string;
  payload: any;
}

export interface WHEN2MEETResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface WHEN2MEETEvent {
  type: string;
  timestamp: Date;
  data: any;
}
