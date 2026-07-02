/**
 * Rumble Integration Types
 */

export interface RUMBLEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface RUMBLERequest {
  action: string;
  payload: any;
}

export interface RUMBLEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface RUMBLEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
