/**
 * Crisp Integration Types
 */

export interface CRISPConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface CRISPRequest {
  action: string;
  payload: any;
}

export interface CRISPResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface CRISPEvent {
  type: string;
  timestamp: Date;
  data: any;
}
