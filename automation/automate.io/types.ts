/**
 * Automate.io Integration Types
 */

export interface AUTOMATE.IOConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface AUTOMATE.IORequest {
  action: string;
  payload: any;
}

export interface AUTOMATE.IOResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface AUTOMATE.IOEvent {
  type: string;
  timestamp: Date;
  data: any;
}
