/**
 * Roblox Integration Types
 */

export interface ROBLOXConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ROBLOXRequest {
  action: string;
  payload: any;
}

export interface ROBLOXResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ROBLOXEvent {
  type: string;
  timestamp: Date;
  data: any;
}
