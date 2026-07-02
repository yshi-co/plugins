/**
 * Etrade Integration Types
 */

export interface ETRADEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ETRADERequest {
  action: string;
  payload: any;
}

export interface ETRADEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ETRADEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
