/**
 * Monday Crm Integration Types
 */

export interface MONDAY_CRMConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MONDAY_CRMRequest {
  action: string;
  payload: any;
}

export interface MONDAY_CRMResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MONDAY_CRMEvent {
  type: string;
  timestamp: Date;
  data: any;
}
