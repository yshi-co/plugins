/**
 * Together Ai Integration Types
 */

export interface TOGETHER_AIConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface TOGETHER_AIRequest {
  action: string;
  payload: any;
}

export interface TOGETHER_AIResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface TOGETHER_AIEvent {
  type: string;
  timestamp: Date;
  data: any;
}
