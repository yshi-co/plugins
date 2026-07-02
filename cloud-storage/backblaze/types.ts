/**
 * Backblaze Integration Types
 */

export interface BACKBLAZEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface BACKBLAZERequest {
  action: string;
  payload: any;
}

export interface BACKBLAZEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface BACKBLAZEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
