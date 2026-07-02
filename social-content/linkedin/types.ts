/**
 * Linkedin Integration Types
 */

export interface LINKEDINConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface LINKEDINRequest {
  action: string;
  payload: any;
}

export interface LINKEDINResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface LINKEDINEvent {
  type: string;
  timestamp: Date;
  data: any;
}
