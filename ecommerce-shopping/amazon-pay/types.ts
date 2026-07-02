/**
 * Amazon Pay Integration Types
 */

export interface AMAZON_PAYConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface AMAZON_PAYRequest {
  action: string;
  payload: any;
}

export interface AMAZON_PAYResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface AMAZON_PAYEvent {
  type: string;
  timestamp: Date;
  data: any;
}
