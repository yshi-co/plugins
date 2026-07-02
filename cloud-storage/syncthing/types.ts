/**
 * Syncthing Integration Types
 */

export interface SYNCTHINGConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SYNCTHINGRequest {
  action: string;
  payload: any;
}

export interface SYNCTHINGResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SYNCTHINGEvent {
  type: string;
  timestamp: Date;
  data: any;
}
