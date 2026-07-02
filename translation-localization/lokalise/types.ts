/**
 * Lokalise Integration Types
 */

export interface LOKALISEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface LOKALISERequest {
  action: string;
  payload: any;
}

export interface LOKALISEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface LOKALISEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
