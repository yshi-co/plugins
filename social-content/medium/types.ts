/**
 * Medium Integration Types
 */

export interface MEDIUMConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MEDIUMRequest {
  action: string;
  payload: any;
}

export interface MEDIUMResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MEDIUMEvent {
  type: string;
  timestamp: Date;
  data: any;
}
