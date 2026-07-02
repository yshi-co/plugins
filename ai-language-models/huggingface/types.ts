/**
 * Huggingface Integration Types
 */

export interface HUGGINGFACEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface HUGGINGFACERequest {
  action: string;
  payload: any;
}

export interface HUGGINGFACEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface HUGGINGFACEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
