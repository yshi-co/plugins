/**
 * Quickbooks Integration Types
 */

export interface QUICKBOOKSConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface QUICKBOOKSRequest {
  action: string;
  payload: any;
}

export interface QUICKBOOKSResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface QUICKBOOKSEvent {
  type: string;
  timestamp: Date;
  data: any;
}
