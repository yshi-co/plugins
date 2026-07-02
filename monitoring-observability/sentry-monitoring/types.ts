/**
 * Sentry Monitoring Integration Types
 */

export interface SENTRY_MONITORINGConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SENTRY_MONITORINGRequest {
  action: string;
  payload: any;
}

export interface SENTRY_MONITORINGResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SENTRY_MONITORINGEvent {
  type: string;
  timestamp: Date;
  data: any;
}
