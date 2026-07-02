/**
 * Substack Integration Types
 */

export interface SUBSTACKConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SUBSTACKRequest {
  action: string;
  payload: any;
}

export interface SUBSTACKResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SUBSTACKEvent {
  type: string;
  timestamp: Date;
  data: any;
}
