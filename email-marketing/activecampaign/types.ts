/**
 * Activecampaign Integration Types
 */

export interface ACTIVECAMPAIGNConfig {
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  [key: string]: any;
}

export interface ACTIVECAMPAIGNRequest {
  action: string;
  payload: any;
}

export interface ACTIVECAMPAIGNResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ACTIVECAMPAIGNEvent {
  type: string;
  timestamp: Date;
  data: any;
}
