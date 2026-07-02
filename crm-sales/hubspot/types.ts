/**
 * Hubspot Integration Types
 */

export interface HUBSPOTConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface HUBSPOTRequest {
  action: string;
  payload: any;
}

export interface HUBSPOTResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface HUBSPOTEvent {
  type: string;
  timestamp: Date;
  data: any;
}
