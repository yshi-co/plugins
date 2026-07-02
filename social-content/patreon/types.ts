/**
 * Patreon Integration Types
 */

export interface PATREONConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface PATREONRequest {
  action: string;
  payload: any;
}

export interface PATREONResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface PATREONEvent {
  type: string;
  timestamp: Date;
  data: any;
}
