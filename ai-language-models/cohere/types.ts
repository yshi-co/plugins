/**
 * Cohere Integration Types
 */

export interface COHEREConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface COHERERequest {
  action: string;
  payload: any;
}

export interface COHEREResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface COHEREEvent {
  type: string;
  timestamp: Date;
  data: any;
}
