/**
 * Zendesk Integration Types
 */

export interface ZENDESKConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ZENDESKRequest {
  action: string;
  payload: any;
}

export interface ZENDESKResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ZENDESKEvent {
  type: string;
  timestamp: Date;
  data: any;
}
