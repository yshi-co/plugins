/**
 * Omnisend Integration Types
 */

export interface OMNISENDConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface OMNISENDRequest {
  action: string;
  payload: any;
}

export interface OMNISENDResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface OMNISENDEvent {
  type: string;
  timestamp: Date;
  data: any;
}
