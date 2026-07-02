/**
 * Google Drive Integration Types
 */

export interface GOOGLE_DRIVEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface GOOGLE_DRIVERequest {
  action: string;
  payload: any;
}

export interface GOOGLE_DRIVEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface GOOGLE_DRIVEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
