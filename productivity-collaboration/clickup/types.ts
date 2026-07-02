/**
 * Clickup Integration Types
 */

export interface CLICKUPConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface CLICKUPRequest {
  action: string;
  payload: any;
}

export interface CLICKUPResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface CLICKUPEvent {
  type: string;
  timestamp: Date;
  data: any;
}
