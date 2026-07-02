/**
 * Datadog Integration Types
 */

export interface DATADOGConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface DATADOGRequest {
  action: string;
  payload: any;
}

export interface DATADOGResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface DATADOGEvent {
  type: string;
  timestamp: Date;
  data: any;
}
