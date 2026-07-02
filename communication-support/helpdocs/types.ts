/**
 * Helpdocs Integration Types
 */

export interface HELPDOCSConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface HELPDOCSRequest {
  action: string;
  payload: any;
}

export interface HELPDOCSResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface HELPDOCSEvent {
  type: string;
  timestamp: Date;
  data: any;
}
