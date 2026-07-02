/**
 * Grafana Integration Types
 */

export interface GRAFANAConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface GRAFANARequest {
  action: string;
  payload: any;
}

export interface GRAFANAResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface GRAFANAEvent {
  type: string;
  timestamp: Date;
  data: any;
}
