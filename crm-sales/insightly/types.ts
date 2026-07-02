/**
 * Insightly Integration Types
 */

export interface INSIGHTLYConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface INSIGHTLYRequest {
  action: string;
  payload: any;
}

export interface INSIGHTLYResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface INSIGHTLYEvent {
  type: string;
  timestamp: Date;
  data: any;
}
