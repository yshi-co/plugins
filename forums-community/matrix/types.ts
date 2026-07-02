/**
 * Matrix Integration Types
 */

export interface MATRIXConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MATRIXRequest {
  action: string;
  payload: any;
}

export interface MATRIXResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MATRIXEvent {
  type: string;
  timestamp: Date;
  data: any;
}
