/**
 * Kubernetes Integration Types
 */

export interface KUBERNETESConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface KUBERNETESRequest {
  action: string;
  payload: any;
}

export interface KUBERNETESResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface KUBERNETESEvent {
  type: string;
  timestamp: Date;
  data: any;
}
