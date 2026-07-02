/**
 * Google Analytics Integration Types
 */

export interface GOOGLE_ANALYTICSConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface GOOGLE_ANALYTICSRequest {
  action: string;
  payload: any;
}

export interface GOOGLE_ANALYTICSResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface GOOGLE_ANALYTICSEvent {
  type: string;
  timestamp: Date;
  data: any;
}
