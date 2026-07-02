/**
 * Twilio Integration Types
 */

export interface TWILIOConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface TWILIORequest {
  action: string;
  payload: any;
}

export interface TWILIOResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface TWILIOEvent {
  type: string;
  timestamp: Date;
  data: any;
}
