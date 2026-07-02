/**
 * Box Integration Types
 */

export interface BOXConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface BOXRequest {
  action: string;
  payload: any;
}

export interface BOXResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface BOXEvent {
  type: string;
  timestamp: Date;
  data: any;
}
