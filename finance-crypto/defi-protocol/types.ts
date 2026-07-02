/**
 * Defi Protocol Integration Types
 */

export interface DEFI_PROTOCOLConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface DEFI_PROTOCOLRequest {
  action: string;
  payload: any;
}

export interface DEFI_PROTOCOLResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface DEFI_PROTOCOLEvent {
  type: string;
  timestamp: Date;
  data: any;
}
