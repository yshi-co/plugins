/**
 * 2checkout Integration Types
 */

export interface 2CHECKOUTConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface 2CHECKOUTRequest {
  action: string;
  payload: any;
}

export interface 2CHECKOUTResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface 2CHECKOUTEvent {
  type: string;
  timestamp: Date;
  data: any;
}
