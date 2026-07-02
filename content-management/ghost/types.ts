/**
 * Ghost Integration Types
 */

export interface GHOSTConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface GHOSTRequest {
  action: string;
  payload: any;
}

export interface GHOSTResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface GHOSTEvent {
  type: string;
  timestamp: Date;
  data: any;
}
