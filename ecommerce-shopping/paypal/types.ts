/**
 * Paypal Integration Types
 */

export interface PAYPALConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface PAYPALRequest {
  action: string;
  payload: any;
}

export interface PAYPALResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface PAYPALEvent {
  type: string;
  timestamp: Date;
  data: any;
}
