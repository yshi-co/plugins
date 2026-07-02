/**
 * Onedrive Integration Types
 */

export interface ONEDRIVEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ONEDRIVERequest {
  action: string;
  payload: any;
}

export interface ONEDRIVEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ONEDRIVEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
