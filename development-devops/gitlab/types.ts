/**
 * Gitlab Integration Types
 */

export interface GITLABConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface GITLABRequest {
  action: string;
  payload: any;
}

export interface GITLABResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface GITLABEvent {
  type: string;
  timestamp: Date;
  data: any;
}
