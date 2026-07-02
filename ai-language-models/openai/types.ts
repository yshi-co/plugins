/**
 * Openai Integration Types
 */

export interface OPENAIConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface OPENAIRequest {
  action: string;
  payload: any;
}

export interface OPENAIResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface OPENAIEvent {
  type: string;
  timestamp: Date;
  data: any;
}
