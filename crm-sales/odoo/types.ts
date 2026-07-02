/**
 * Odoo Integration Types
 */

export interface ODOOConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ODOORequest {
  action: string;
  payload: any;
}

export interface ODOOResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ODOOEvent {
  type: string;
  timestamp: Date;
  data: any;
}
