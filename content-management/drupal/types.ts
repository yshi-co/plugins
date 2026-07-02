/**
 * Drupal Integration Types
 */

export interface DRUPALConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface DRUPALRequest {
  action: string;
  payload: any;
}

export interface DRUPALResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface DRUPALEvent {
  type: string;
  timestamp: Date;
  data: any;
}
