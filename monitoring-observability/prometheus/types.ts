/**
 * Prometheus Integration Types
 */

export interface PROMETHEUSConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface PROMETHEUSRequest {
  action: string;
  payload: any;
}

export interface PROMETHEUSResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface PROMETHEUSEvent {
  type: string;
  timestamp: Date;
  data: any;
}
