/**
 * Foursquare Integration Types
 */

export interface FOURSQUAREConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface FOURSQUARERequest {
  action: string;
  payload: any;
}

export interface FOURSQUAREResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface FOURSQUAREEvent {
  type: string;
  timestamp: Date;
  data: any;
}
