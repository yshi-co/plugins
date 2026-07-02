/**
 * Pinterest Integration Types
 */

export interface PINTERESTConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface PINTERESTRequest {
  action: string;
  payload: any;
}

export interface PINTERESTResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface PINTERESTEvent {
  type: string;
  timestamp: Date;
  data: any;
}
