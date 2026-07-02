/**
 * Hotjar Integration Types
 */

export interface HOTJARConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface HOTJARRequest {
  action: string;
  payload: any;
}

export interface HOTJARResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface HOTJAREvent {
  type: string;
  timestamp: Date;
  data: any;
}
