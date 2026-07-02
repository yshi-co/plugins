/**
 * Bigcommerce Integration Types
 */

export interface BIGCOMMERCEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface BIGCOMMERCERequest {
  action: string;
  payload: any;
}

export interface BIGCOMMERCEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface BIGCOMMERCEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
