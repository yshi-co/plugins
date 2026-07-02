/**
 * Pipedrive Integration Types
 */

export interface PIPEDRIVEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface PIPEDRIVERequest {
  action: string;
  payload: any;
}

export interface PIPEDRIVEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface PIPEDRIVEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
