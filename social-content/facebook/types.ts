/**
 * Facebook Integration Types
 */

export interface FACEBOOKConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface FACEBOOKRequest {
  action: string;
  payload: any;
}

export interface FACEBOOKResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface FACEBOOKEvent {
  type: string;
  timestamp: Date;
  data: any;
}
