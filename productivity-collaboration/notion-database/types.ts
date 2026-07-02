/**
 * Notion Database Integration Types
 */

export interface NOTION_DATABASEConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface NOTION_DATABASERequest {
  action: string;
  payload: any;
}

export interface NOTION_DATABASEResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface NOTION_DATABASEEvent {
  type: string;
  timestamp: Date;
  data: any;
}
