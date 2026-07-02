/**
 * Sendgrid Integration Types
 */

export interface SENDGRIDConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SENDGRIDRequest {
  action: string;
  payload: any;
}

export interface SENDGRIDResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SENDGRIDEvent {
  type: string;
  timestamp: Date;
  data: any;
}
