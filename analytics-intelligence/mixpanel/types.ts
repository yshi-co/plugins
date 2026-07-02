/**
 * Mixpanel Integration Types
 */

export interface MIXPANELConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface MIXPANELRequest {
  action: string;
  payload: any;
}

export interface MIXPANELResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface MIXPANELEvent {
  type: string;
  timestamp: Date;
  data: any;
}
