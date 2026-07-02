/**
 * Tiktok Integration Types
 */

export interface TIKTOKConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface TIKTOKRequest {
  action: string;
  payload: any;
}

export interface TIKTOKResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface TIKTOKEvent {
  type: string;
  timestamp: Date;
  data: any;
}
