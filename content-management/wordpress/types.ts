/**
 * Wordpress Integration Types
 */

export interface WORDPRESSConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface WORDPRESSRequest {
  action: string;
  payload: any;
}

export interface WORDPRESSResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface WORDPRESSEvent {
  type: string;
  timestamp: Date;
  data: any;
}
