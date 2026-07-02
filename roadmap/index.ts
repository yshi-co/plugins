/**
 * Roadmap Main Index
 * Central entry point for the entire roadmap system
 */

// Core types (bedrock layer)
export * from '../src/types/integration';

// Configuration (single source of truth)
export { default as RoadmapConfig } from './config/roadmap.config';
export { PHASES, CATEGORIES_METADATA, ROADMAP_METADATA } from './config/roadmap.config';

// Categories (all 20)
export * from './categories';

// Templates
export { INTEGRATION_TEMPLATE } from './templates/integration-template';

// Re-export for convenience
import {
  Integration,
  Category,
  Phase,
  Primitive,
  IntegrationStatus,
  UseCase,
  RoadmapMetadata
} from '../src/types/integration';

export type {
  Integration,
  Category,
  Phase,
  Primitive,
  IntegrationStatus,
  UseCase,
  RoadmapMetadata
};

/**
 * Roadmap Statistics
 */
export interface RoadmapStats {
  totalPhases: number;
  totalCategories: number;
  totalIntegrations: number;
  completedIntegrations: number;
  inProgressIntegrations: number;
  plannedIntegrations: number;
  primitivesCoverage: Record<string, { usage: number; percentage: number }>;
}

/**
 * Get all integrations across all categories
 */
export function getAllIntegrations(): Integration[] {
  // To be implemented when categories are fully populated
  return [];
}

/**
 * Get integrations by phase
 */
export function getIntegrationsByPhase(phaseNumber: number): Integration[] {
  // To be implemented
  return [];
}

/**
 * Get integrations by primitive
 */
export function getIntegrationsByPrimitive(primitive: Primitive): Integration[] {
  // To be implemented
  return [];
}

/**
 * Get category by ID
 */
export function getCategoryById(categoryId: string): Category | null {
  // To be implemented
  return null;
}

/**
 * Get phase by number
 */
export function getPhaseByNumber(phaseNumber: number): Phase | null {
  // To be implemented
  return null;
}

/**
 * Calculate roadmap statistics
 */
export function getRoadmapStats(): RoadmapStats {
  // To be implemented
  return {
    totalPhases: 20,
    totalCategories: 20,
    totalIntegrations: 154,
    completedIntegrations: 0,
    inProgressIntegrations: 0,
    plannedIntegrations: 154,
    primitivesCoverage: {
      'Bot Webhooks': { usage: 140, percentage: 91 },
      'Mini Apps': { usage: 95, percentage: 62 },
      'OIDC OAuth': { usage: 45, percentage: 29 },
      'Points System': { usage: 25, percentage: 16 }
    }
  };
}
