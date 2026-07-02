/**
 * Acuity Scheduler Integration Types
 */

export interface ACUITY_SCHEDULERConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ACUITY_SCHEDULERRequest {
  action: string;
  payload: any;
}

export interface ACUITY_SCHEDULERResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ACUITY_SCHEDULEREvent {
  type: string;
  timestamp: Date;
  data: any;
}
