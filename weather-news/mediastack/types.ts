/**
 * Mediastack Integration Types
 */

export interface MEDIASTACKConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MEDIASTACKRequest {
  action: string;
  payload: any;
}

export interface MEDIASTACKResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MEDIASTACKEvent {
  type: string;
  timestamp: Date;
  data: any;
}
