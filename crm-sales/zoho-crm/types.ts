/**
 * Zoho Crm Integration Types
 */

export interface ZOHO_CRMConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ZOHO_CRMRequest {
  action: string;
  payload: any;
}

export interface ZOHO_CRMResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ZOHO_CRMEvent {
  type: string;
  timestamp: Date;
  data: any;
}
