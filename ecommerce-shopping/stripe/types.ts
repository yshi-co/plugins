/**
 * Stripe Integration Types
 */

export interface STRIPEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface STRIPERequest {
  action: string;
  payload: any;
}

export interface STRIPEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface STRIPEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
