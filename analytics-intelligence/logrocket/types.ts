/**
 * Logrocket Integration Types
 */

export interface LOGROCKETConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface LOGROCKETRequest {
  action: string;
  payload: any;
}

export interface LOGROCKETResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface LOGROCKETEvent {
  type: string;
  timestamp: Date;
  data: any;
}
