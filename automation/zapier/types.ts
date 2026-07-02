/**
 * Zapier Integration Types
 */

export interface ZAPIERConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ZAPIERRequest {
  action: string;
  payload: any;
}

export interface ZAPIERResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ZAPIEREvent {
  type: string;
  timestamp: Date;
  data: any;
}
