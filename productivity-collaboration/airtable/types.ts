/**
 * Airtable Integration Types
 */

export interface AIRTABLEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface AIRTABLERequest {
  action: string;
  payload: any;
}

export interface AIRTABLEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface AIRTABLEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
