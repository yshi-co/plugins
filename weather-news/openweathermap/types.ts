/**
 * Openweathermap Integration Types
 */

export interface OPENWEATHERMAPConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface OPENWEATHERMAPRequest {
  action: string;
  payload: any;
}

export interface OPENWEATHERMAPResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface OPENWEATHERMAPEvent {
  type: string;
  timestamp: Date;
  data: any;
}
