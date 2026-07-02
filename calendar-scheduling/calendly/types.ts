/**
 * Calendly Integration Types
 */

export interface CALENDLYConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface CALENDLYRequest {
  action: string;
  payload: any;
}

export interface CALENDLYResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface CALENDLYEvent {
  type: string;
  timestamp: Date;
  data: any;
}
