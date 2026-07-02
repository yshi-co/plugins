/**
 * Notion Tables Integration Types
 */

export interface NOTION_TABLESConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface NOTION_TABLESRequest {
  action: string;
  payload: any;
}

export interface NOTION_TABLESResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface NOTION_TABLESEvent {
  type: string;
  timestamp: Date;
  data: any;
}
