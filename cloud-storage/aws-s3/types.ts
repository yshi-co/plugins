/**
 * Aws S3 Integration Types
 */

export interface AWS_S3Config {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface AWS_S3Request {
  action: string;
  payload: any;
}

export interface AWS_S3Response {
  success: boolean;
  data?: any;
  error?: string;
}

export interface AWS_S3Event {
  type: string;
  timestamp: Date;
  data: any;
}
