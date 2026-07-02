/**
 * Deepl Integration Types
 */

export interface DEEPLConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface DEEPLRequest {
  action: string;
  payload: any;
}

export interface DEEPLResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface DEEPLEvent {
  type: string;
  timestamp: Date;
  data: any;
}
