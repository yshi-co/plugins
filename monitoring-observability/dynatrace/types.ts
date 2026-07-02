/**
 * Dynatrace Integration Types
 */

export interface DYNATRACEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface DYNATRACERequest {
  action: string;
  payload: any;
}

export interface DYNATRACEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface DYNATRACEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
