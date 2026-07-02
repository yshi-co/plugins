/**
 * Klaviyo Integration Types
 */

export interface KLAVIYOConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface KLAVIYORequest {
  action: string;
  payload: any;
}

export interface KLAVIYOResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface KLAVIYOEvent {
  type: string;
  timestamp: Date;
  data: any;
}
