/**
 * Trello Integration Types
 */

export interface TRELLOConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface TRELLORequest {
  action: string;
  payload: any;
}

export interface TRELLOResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface TRELLOEvent {
  type: string;
  timestamp: Date;
  data: any;
}
