/**
 * Shopify Integration Types
 */

export interface SHOPIFYConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SHOPIFYRequest {
  action: string;
  payload: any;
}

export interface SHOPIFYResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SHOPIFYEvent {
  type: string;
  timestamp: Date;
  data: any;
}
