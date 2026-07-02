/**
 * Coingecko Integration Types
 */

export interface COINGECKOConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface COINGECKORequest {
  action: string;
  payload: any;
}

export interface COINGECKOResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface COINGECKOEvent {
  type: string;
  timestamp: Date;
  data: any;
}
