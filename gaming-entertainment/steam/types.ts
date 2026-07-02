/**
 * Steam Integration Types
 */

export interface STEAMConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface STEAMRequest {
  action: string;
  payload: any;
}

export interface STEAMResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface STEAMEvent {
  type: string;
  timestamp: Date;
  data: any;
}
