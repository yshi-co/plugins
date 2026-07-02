/**
 * Wise Integration Types
 */

export interface WISEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface WISERequest {
  action: string;
  payload: any;
}

export interface WISEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface WISEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
