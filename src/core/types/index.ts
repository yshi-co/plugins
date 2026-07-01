export type YshiPrimitive = 'webhooks' | 'miniapps' | 'oauth' | 'points';

export type PluginCategory =
  | 'developer-tools'
  | 'crm'
  | 'productivity'
  | 'ecommerce'
  | 'content'
  | 'community'
  | 'support'
  | 'storage';

export interface YshiPlugin {
  name: string;
  category: PluginCategory;
  version: string;
  primitives: YshiPrimitive[];
  description?: string;
}

export interface WebhookPayload {
  event: string;
  data: Record<string, unknown>;
  timestamp: number;
}

export interface OAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scopes: string[];
}

export interface PointsTransaction {
  userId: string;
  amount: number;
  reason: string;
  metadata?: Record<string, unknown>;
}

export interface MiniAppConfig {
  url: string;
  title: string;
  width?: number;
  height?: number;
}
