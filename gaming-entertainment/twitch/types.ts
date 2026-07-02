/**
 * Twitch Integration Types
 */

export interface TWITCHConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface TWITCHRequest {
  action: string;
  payload: any;
}

export interface TWITCHResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface TWITCHEvent {
  type: string;
  timestamp: Date;
  data: any;
}
