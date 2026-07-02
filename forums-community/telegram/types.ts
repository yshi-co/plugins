/**
 * Telegram Integration Types
 */

export interface TELEGRAMConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface TELEGRAMRequest {
  action: string;
  payload: any;
}

export interface TELEGRAMResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface TELEGRAMEvent {
  type: string;
  timestamp: Date;
  data: any;
}
