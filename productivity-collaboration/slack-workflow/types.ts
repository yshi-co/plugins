/**
 * Slack Workflow Integration Types
 */

export interface SLACK_WORKFLOWConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface SLACK_WORKFLOWRequest {
  action: string;
  payload: any;
}

export interface SLACK_WORKFLOWResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface SLACK_WORKFLOWEvent {
  type: string;
  timestamp: Date;
  data: any;
}
