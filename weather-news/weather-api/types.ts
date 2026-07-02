/**
 * Weather Api Integration Types
 */

export interface WEATHER_APIConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface WEATHER_APIRequest {
  action: string;
  payload: any;
}

export interface WEATHER_APIResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface WEATHER_APIEvent {
  type: string;
  timestamp: Date;
  data: any;
}
