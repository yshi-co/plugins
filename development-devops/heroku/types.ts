/**
 * Heroku Integration Types
 */

export interface HEROKUConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface HEROKURequest {
  action: string;
  payload: any;
}

export interface HEROKUResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface HEROKUEvent {
  type: string;
  timestamp: Date;
  data: any;
}
