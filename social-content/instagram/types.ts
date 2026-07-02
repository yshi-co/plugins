/**
 * Instagram Integration Types
 */

export interface INSTAGRAMConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface INSTAGRAMRequest {
  action: string;
  payload: any;
}

export interface INSTAGRAMResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface INSTAGRAMEvent {
  type: string;
  timestamp: Date;
  data: any;
}
