/**
 * Jira Integration Types
 */

export interface JIRAConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface JIRARequest {
  action: string;
  payload: any;
}

export interface JIRAResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface JIRAEvent {
  type: string;
  timestamp: Date;
  data: any;
}
