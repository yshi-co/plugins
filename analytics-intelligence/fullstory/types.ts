/**
 * Fullstory Integration Types
 */

export interface FULLSTORYConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface FULLSTORYRequest {
  action: string;
  payload: any;
}

export interface FULLSTORYResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface FULLSTORYEvent {
  type: string;
  timestamp: Date;
  data: any;
}
