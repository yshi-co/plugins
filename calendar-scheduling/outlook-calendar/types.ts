/**
 * Outlook Calendar Integration Types
 */

export interface OUTLOOK_CALENDARConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface OUTLOOK_CALENDARRequest {
  action: string;
  payload: any;
}

export interface OUTLOOK_CALENDARResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface OUTLOOK_CALENDAREvent {
  type: string;
  timestamp: Date;
  data: any;
}
