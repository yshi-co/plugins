/**
 * Fantastical Integration Types
 */

export interface FANTASTICALConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface FANTASTICALRequest {
  action: string;
  payload: any;
}

export interface FANTASTICALResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface FANTASTICALEvent {
  type: string;
  timestamp: Date;
  data: any;
}
