/**
 * Doodle Integration Types
 */

export interface DOODLEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface DOODLERequest {
  action: string;
  payload: any;
}

export interface DOODLEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface DOODLEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
