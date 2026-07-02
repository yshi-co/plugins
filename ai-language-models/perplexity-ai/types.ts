/**
 * Perplexity Ai Integration Types
 */

export interface PERPLEXITY_AIConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface PERPLEXITY_AIRequest {
  action: string;
  payload: any;
}

export interface PERPLEXITY_AIResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface PERPLEXITY_AIEvent {
  type: string;
  timestamp: Date;
  data: any;
}
