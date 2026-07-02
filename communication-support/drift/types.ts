/**
 * Drift Integration Types
 */

export interface DRIFTConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface DRIFTRequest {
  action: string;
  payload: any;
}

export interface DRIFTResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface DRIFTEvent {
  type: string;
  timestamp: Date;
  data: any;
}
