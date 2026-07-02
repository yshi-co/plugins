/**
 * Ifttt Integration Types
 */

export interface IFTTTConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface IFTTTRequest {
  action: string;
  payload: any;
}

export interface IFTTTResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface IFTTTEvent {
  type: string;
  timestamp: Date;
  data: any;
}
