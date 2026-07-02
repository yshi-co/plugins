/**
 * Asana Integration Types
 */

export interface ASANAConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ASANARequest {
  action: string;
  payload: any;
}

export interface ASANAResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ASANAEvent {
  type: string;
  timestamp: Date;
  data: any;
}
