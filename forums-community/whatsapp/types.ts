/**
 * Whatsapp Integration Types
 */

export interface WHATSAPPConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface WHATSAPPRequest {
  action: string;
  payload: any;
}

export interface WHATSAPPResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface WHATSAPPEvent {
  type: string;
  timestamp: Date;
  data: any;
}
