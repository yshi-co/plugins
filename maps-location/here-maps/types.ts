/**
 * Here Maps Integration Types
 */

export interface HERE_MAPSConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface HERE_MAPSRequest {
  action: string;
  payload: any;
}

export interface HERE_MAPSResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface HERE_MAPSEvent {
  type: string;
  timestamp: Date;
  data: any;
}
