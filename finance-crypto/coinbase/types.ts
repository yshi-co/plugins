/**
 * Coinbase Integration Types
 */

export interface COINBASEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface COINBASERequest {
  action: string;
  payload: any;
}

export interface COINBASEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface COINBASEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
