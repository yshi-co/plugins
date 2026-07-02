/**
 * Mautic Integration Types
 */

export interface MAUTICConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MAUTICRequest {
  action: string;
  payload: any;
}

export interface MAUTICResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MAUTICEvent {
  type: string;
  timestamp: Date;
  data: any;
}
