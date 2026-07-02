/**
 * Medium Membership Integration Types
 */

export interface MEDIUM_MEMBERSHIPConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MEDIUM_MEMBERSHIPRequest {
  action: string;
  payload: any;
}

export interface MEDIUM_MEMBERSHIPResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MEDIUM_MEMBERSHIPEvent {
  type: string;
  timestamp: Date;
  data: any;
}
