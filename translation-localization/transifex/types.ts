/**
 * Transifex Integration Types
 */

export interface TRANSIFEXConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface TRANSIFEXRequest {
  action: string;
  payload: any;
}

export interface TRANSIFEXResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface TRANSIFEXEvent {
  type: string;
  timestamp: Date;
  data: any;
}
