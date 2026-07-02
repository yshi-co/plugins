/**
 * Papercall Integration Types
 */

export interface PAPERCALLConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface PAPERCALLRequest {
  action: string;
  payload: any;
}

export interface PAPERCALLResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface PAPERCALLEvent {
  type: string;
  timestamp: Date;
  data: any;
}
