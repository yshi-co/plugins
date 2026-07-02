/**
 * Figma Integration Types
 */

export interface FIGMAConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface FIGMARequest {
  action: string;
  payload: any;
}

export interface FIGMAResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface FIGMAEvent {
  type: string;
  timestamp: Date;
  data: any;
}
