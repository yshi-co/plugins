/**
 * Typeform Integration Types
 */

export interface TYPEFORMConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface TYPEFORMRequest {
  action: string;
  payload: any;
}

export interface TYPEFORMResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface TYPEFORMEvent {
  type: string;
  timestamp: Date;
  data: any;
}
