/**
 * Google Maps Integration Types
 */

export interface GOOGLE_MAPSConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface GOOGLE_MAPSRequest {
  action: string;
  payload: any;
}

export interface GOOGLE_MAPSResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface GOOGLE_MAPSEvent {
  type: string;
  timestamp: Date;
  data: any;
}
