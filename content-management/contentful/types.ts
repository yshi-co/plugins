/**
 * Contentful Integration Types
 */

export interface CONTENTFULConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface CONTENTFULRequest {
  action: string;
  payload: any;
}

export interface CONTENTFULResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface CONTENTFULEvent {
  type: string;
  timestamp: Date;
  data: any;
}
