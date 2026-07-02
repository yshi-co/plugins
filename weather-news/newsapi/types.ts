/**
 * Newsapi Integration Types
 */

export interface NEWSAPIConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface NEWSAPIRequest {
  action: string;
  payload: any;
}

export interface NEWSAPIResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface NEWSAPIEvent {
  type: string;
  timestamp: Date;
  data: any;
}
