/**
 * Epic Games Integration Types
 */

export interface EPIC_GAMESConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface EPIC_GAMESRequest {
  action: string;
  payload: any;
}

export interface EPIC_GAMESResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface EPIC_GAMESEvent {
  type: string;
  timestamp: Date;
  data: any;
}
