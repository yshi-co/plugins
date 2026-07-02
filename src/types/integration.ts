/**
 * Core Integration Type Definitions
 * Bedrock types for all integrations across the Yshi platform
 */

/**
 * Yshi API Primitives
 */
export enum Primitive {
  BotWebhooks = 'Bot Webhooks',
  MiniApps = 'Mini Apps',
  OIDCOAuth = 'OIDC OAuth',
  PointsSystem = 'Points System'
}

/**
 * Integration Status
 */
export enum IntegrationStatus {
  Planning = 'Planning',
  InProgress = 'In Progress',
  Active = 'Active',
  OnHold = 'On Hold',
  Deprecated = 'Deprecated'
}

/**
 * Integration Use Case
 */
export interface UseCase {
  title: string;
  description: string;
  primitives: Primitive[];
}

/**
 * Integration Details
 */
export interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  categoryId: string;
  phaseNumber: number;
  status: IntegrationStatus;
  primitives: Primitive[];
  useCases: UseCase[];
  apiDocUrl?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedEffort?: string;
  dependencies?: string[];
  tags?: string[];
}

/**
 * Category Metadata
 */
export interface Category {
  id: string;
  name: string;
  emoji: string;
  phaseNumber: number;
  description: string;
  folder: string;
  integrationCount: number;
  integrations: Integration[];
  status: IntegrationStatus;
}

/**
 * Phase Definition
 */
export interface Phase {
  number: number;
  name: string;
  description: string;
  categories: string[]; // category IDs
  totalIntegrations: number;
  completed: number;
  inProgress: number;
  planned: number;
  status: IntegrationStatus;
}

/**
 * Roadmap Metadata
 */
export interface RoadmapMetadata {
  version: string;
  lastUpdated: string;
  totalPhases: number;
  totalCategories: number;
  totalIntegrations: number;
  primitivesCoverage: Record<Primitive, {
    usage: number;
    percentage: number;
  }>;
}
