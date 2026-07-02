/**
 * Vtiger Integration Types
 */

export interface VTIGERConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface VTIGERRequest {
  action: string;
  payload: any;
}

export interface VTIGERResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface VTIGEREvent {
  type: string;
  timestamp: Date;
  data: any;
}
