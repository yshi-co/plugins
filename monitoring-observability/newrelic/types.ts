/**
 * Newrelic Integration Types
 */

export interface NEWRELICConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface NEWRELICRequest {
  action: string;
  payload: any;
}

export interface NEWRELICResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface NEWRELICEvent {
  type: string;
  timestamp: Date;
  data: any;
}
