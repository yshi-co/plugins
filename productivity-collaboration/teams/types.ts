/**
 * Teams Integration Types
 */

export interface TEAMSConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface TEAMSRequest {
  action: string;
  payload: any;
}

export interface TEAMSResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface TEAMSEvent {
  type: string;
  timestamp: Date;
  data: any;
}
