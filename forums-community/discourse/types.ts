/**
 * Discourse Integration Types
 */

export interface DISCOURSEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface DISCOURSERequest {
  action: string;
  payload: any;
}

export interface DISCOURSEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface DISCOURSEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
