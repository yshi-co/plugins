/**
 * Discord Integration Types
 */

export interface DISCORDConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface DISCORDRequest {
  action: string;
  payload: any;
}

export interface DISCORDResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface DISCORDEvent {
  type: string;
  timestamp: Date;
  data: any;
}
