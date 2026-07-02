/**
 * Brevo Integration Types
 */

export interface BREVOConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface BREVORequest {
  action: string;
  payload: any;
}

export interface BREVOResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface BREVOEvent {
  type: string;
  timestamp: Date;
  data: any;
}
