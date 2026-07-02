/**
 * Splunk Integration Types
 */

export interface SPLUNKConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SPLUNKRequest {
  action: string;
  payload: any;
}

export interface SPLUNKResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SPLUNKEvent {
  type: string;
  timestamp: Date;
  data: any;
}
