/**
 * Uptime Kuma Integration Types
 */

export interface UPTIME_KUMAConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface UPTIME_KUMARequest {
  action: string;
  payload: any;
}

export interface UPTIME_KUMAResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface UPTIME_KUMAEvent {
  type: string;
  timestamp: Date;
  data: any;
}
