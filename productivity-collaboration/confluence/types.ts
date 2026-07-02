/**
 * Confluence Integration Types
 */

export interface CONFLUENCEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface CONFLUENCERequest {
  action: string;
  payload: any;
}

export interface CONFLUENCEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface CONFLUENCEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
