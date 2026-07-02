/**
 * Amplitude Integration Types
 */

export interface AMPLITUDEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface AMPLITUDERequest {
  action: string;
  payload: any;
}

export interface AMPLITUDEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface AMPLITUDEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
