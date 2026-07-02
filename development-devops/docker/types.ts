/**
 * Docker Integration Types
 */

export interface DOCKERConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface DOCKERRequest {
  action: string;
  payload: any;
}

export interface DOCKERResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface DOCKEREvent {
  type: string;
  timestamp: Date;
  data: any;
}
