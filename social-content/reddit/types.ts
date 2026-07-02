/**
 * Reddit Integration Types
 */

export interface REDDITConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface REDDITRequest {
  action: string;
  payload: any;
}

export interface REDDITResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface REDDITEvent {
  type: string;
  timestamp: Date;
  data: any;
}
