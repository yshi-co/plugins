/**
 * Mapbox Integration Types
 */

export interface MAPBOXConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MAPBOXRequest {
  action: string;
  payload: any;
}

export interface MAPBOXResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MAPBOXEvent {
  type: string;
  timestamp: Date;
  data: any;
}
