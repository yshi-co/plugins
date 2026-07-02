/**
 * Mailchimp Integration Types
 */

export interface MAILCHIMPConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MAILCHIMPRequest {
  action: string;
  payload: any;
}

export interface MAILCHIMPResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MAILCHIMPEvent {
  type: string;
  timestamp: Date;
  data: any;
}
