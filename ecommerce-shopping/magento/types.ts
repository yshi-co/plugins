/**
 * Magento Integration Types
 */

export interface MAGENTOConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MAGENTORequest {
  action: string;
  payload: any;
}

export interface MAGENTOResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MAGENTOEvent {
  type: string;
  timestamp: Date;
  data: any;
}
