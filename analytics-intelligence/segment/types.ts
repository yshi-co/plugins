/**
 * Segment Integration Types
 */

export interface SEGMENTConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SEGMENTRequest {
  action: string;
  payload: any;
}

export interface SEGMENTResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SEGMENTEvent {
  type: string;
  timestamp: Date;
  data: any;
}
