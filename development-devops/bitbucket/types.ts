/**
 * Bitbucket Integration Types
 */

export interface BITBUCKETConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface BITBUCKETRequest {
  action: string;
  payload: any;
}

export interface BITBUCKETResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface BITBUCKETEvent {
  type: string;
  timestamp: Date;
  data: any;
}
