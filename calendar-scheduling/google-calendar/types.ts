/**
 * Google Calendar Integration Types
 */

export interface GOOGLE_CALENDARConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface GOOGLE_CALENDARRequest {
  action: string;
  payload: any;
}

export interface GOOGLE_CALENDARResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface GOOGLE_CALENDAREvent {
  type: string;
  timestamp: Date;
  data: any;
}
