/**
 * Sanity Integration Types
 */

export interface SANITYConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SANITYRequest {
  action: string;
  payload: any;
}

export interface SANITYResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SANITYEvent {
  type: string;
  timestamp: Date;
  data: any;
}
