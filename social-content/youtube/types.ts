/**
 * Youtube Integration Types
 */

export interface YOUTUBEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface YOUTUBERequest {
  action: string;
  payload: any;
}

export interface YOUTUBEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface YOUTUBEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
