/**
 * Miro Integration Types
 */

export interface MIROConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MIRORequest {
  action: string;
  payload: any;
}

export interface MIROResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MIROEvent {
  type: string;
  timestamp: Date;
  data: any;
}
