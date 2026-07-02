/**
 * Odysee Integration Types
 */

export interface ODYSEEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ODYSEERequest {
  action: string;
  payload: any;
}

export interface ODYSEEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ODYSEEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
