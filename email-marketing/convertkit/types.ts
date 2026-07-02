/**
 * Convertkit Integration Types
 */

export interface CONVERTKITConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface CONVERTKITRequest {
  action: string;
  payload: any;
}

export interface CONVERTKITResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface CONVERTKITEvent {
  type: string;
  timestamp: Date;
  data: any;
}
