/**
 * Square Integration Types
 */

export interface SQUAREConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SQUARERequest {
  action: string;
  payload: any;
}

export interface SQUAREResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SQUAREEvent {
  type: string;
  timestamp: Date;
  data: any;
}
