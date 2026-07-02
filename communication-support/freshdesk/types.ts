/**
 * Freshdesk Integration Types
 */

export interface FRESHDESKConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface FRESHDESKRequest {
  action: string;
  payload: any;
}

export interface FRESHDESKResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface FRESHDESKEvent {
  type: string;
  timestamp: Date;
  data: any;
}
