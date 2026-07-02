/**
 * Elastic Stack Integration Types
 */

export interface ELASTIC_STACKConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ELASTIC_STACKRequest {
  action: string;
  payload: any;
}

export interface ELASTIC_STACKResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ELASTIC_STACKEvent {
  type: string;
  timestamp: Date;
  data: any;
}
