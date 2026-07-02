/**
 * Aws Integration Types
 */

export interface AWSConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface AWSRequest {
  action: string;
  payload: any;
}

export interface AWSResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface AWSEvent {
  type: string;
  timestamp: Date;
  data: any;
}
