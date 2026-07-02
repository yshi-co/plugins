/**
 * Make Integration Types
 */

export interface MAKEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MAKERequest {
  action: string;
  payload: any;
}

export interface MAKEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MAKEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
