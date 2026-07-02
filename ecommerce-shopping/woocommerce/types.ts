/**
 * Woocommerce Integration Types
 */

export interface WOOCOMMERCEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface WOOCOMMERCERequest {
  action: string;
  payload: any;
}

export interface WOOCOMMERCEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface WOOCOMMERCEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
