/**
 * Github Integration Types
 */

export interface GITHUBConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface GITHUBRequest {
  action: string;
  payload: any;
}

export interface GITHUBResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface GITHUBEvent {
  type: string;
  timestamp: Date;
  data: any;
}
