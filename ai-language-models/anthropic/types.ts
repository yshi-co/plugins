/**
 * Anthropic Integration Types
 */

export interface ANTHROPICConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ANTHROPICRequest {
  action: string;
  payload: any;
}

export interface ANTHROPICResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ANTHROPICEvent {
  type: string;
  timestamp: Date;
  data: any;
}
