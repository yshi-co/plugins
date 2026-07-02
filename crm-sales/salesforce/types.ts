/**
 * Salesforce Integration Types
 */

export interface SALESFORCEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SALESFORCERequest {
  action: string;
  payload: any;
}

export interface SALESFORCEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SALESFORCEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
