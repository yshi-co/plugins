/**
 * Monday.com Integration Types
 */

export interface MONDAY.COMConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MONDAY.COMRequest {
  action: string;
  payload: any;
}

export interface MONDAY.COMResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MONDAY.COMEvent {
  type: string;
  timestamp: Date;
  data: any;
}
