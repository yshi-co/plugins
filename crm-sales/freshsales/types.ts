/**
 * Freshsales Integration Types
 */

export interface FRESHSALESConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface FRESHSALESRequest {
  action: string;
  payload: any;
}

export interface FRESHSALESResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface FRESHSALESEvent {
  type: string;
  timestamp: Date;
  data: any;
}
