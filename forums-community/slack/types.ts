/**
 * Slack Integration Types
 */

export interface SLACKConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SLACKRequest {
  action: string;
  payload: any;
}

export interface SLACKResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SLACKEvent {
  type: string;
  timestamp: Date;
  data: any;
}
