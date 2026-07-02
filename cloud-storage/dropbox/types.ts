/**
 * Dropbox Integration Types
 */

export interface DROPBOXConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface DROPBOXRequest {
  action: string;
  payload: any;
}

export interface DROPBOXResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface DROPBOXEvent {
  type: string;
  timestamp: Date;
  data: any;
}
