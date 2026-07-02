/**
 * Nextcloud Integration Types
 */

export interface NEXTCLOUDConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface NEXTCLOUDRequest {
  action: string;
  payload: any;
}

export interface NEXTCLOUDResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface NEXTCLOUDEvent {
  type: string;
  timestamp: Date;
  data: any;
}
