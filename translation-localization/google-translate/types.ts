/**
 * Google Translate Integration Types
 */

export interface GOOGLE_TRANSLATEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface GOOGLE_TRANSLATERequest {
  action: string;
  payload: any;
}

export interface GOOGLE_TRANSLATEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface GOOGLE_TRANSLATEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
