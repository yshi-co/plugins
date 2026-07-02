/**
 * Sentry Integration Types
 */

export interface SENTRYConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SENTRYRequest {
  action: string;
  payload: any;
}

export interface SENTRYResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SENTRYEvent {
  type: string;
  timestamp: Date;
  data: any;
}
