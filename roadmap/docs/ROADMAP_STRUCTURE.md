# Roadmap Structure Guide

## Overview

The Yshi Roadmap is organized into a comprehensive, scalable structure with:
- **20 Phases** representing strategic integration categories
- **20 Categories** with individual integration folders
- **154+ Integrations** across all categories
- **Type-safe TypeScript definitions** for consistency
- **Configuration-driven management** for easy updates

---

## Folder Structure

```
/roadmap/
├── config/                           # Central configuration
│   └── roadmap.config.ts            # Phases, categories, metadata
├── categories/                       # Integration category definitions
│   ├── index.ts                     # Category index
│   ├── development-devops.ts        # Phase 1
│   ├── crm-sales.ts                 # Phase 2
│   ├── ... (18 more categories)
│   └── maps-location.ts             # Phase 20
├── phases/                          # Phase definitions (future)
├── templates/                       # Boilerplate templates
│   └── integration-template.ts      # Integration skeleton
└── docs/                            # Documentation

/src/
├── types/
│   └── integration.ts               # Type definitions (bedrock)
└── core/api/
    ├── development-devops/          # Phase 1 implementations
    ├── crm-sales/                   # Phase 2 implementations
    ├── ... (18 more categories)
    └── maps-location/               # Phase 20 implementations
```

---

## Bedrock Layer: Core Types

**Location**: `/src/types/integration.ts`

### Key Types:

1. **Primitive** - Enum of 4 core API capabilities
   - `BotWebhooks` - Real-time event delivery
   - `MiniApps` - Embedded WebApp UIs
   - `OIDCOAuth` - Authentication
   - `PointsSystem` - In-chat rewards

2. **Integration** - Complete integration definition
   - `id`, `name`, `description`
   - `category`, `categoryId`, `phaseNumber`
   - `status`, `primitives`, `useCases`
   - `difficulty`, `estimatedEffort`, `dependencies`

3. **UseCase** - Feature definition with primitives
   - `title`, `description`
   - `primitives` - which API capabilities it uses

4. **Category** - Integration category metadata
   - `id`, `name`, `emoji`
   - `phaseNumber`, `folder`
   - `integrationCount`, `status`

5. **Phase** - Phase metadata
   - `number`, `name`, `description`
   - `categories`, `totalIntegrations`
   - `completed`, `inProgress`, `planned`

6. **RoadmapMetadata** - Global roadmap statistics
   - `version`, `lastUpdated`
   - `totalPhases`, `totalCategories`, `totalIntegrations`
   - `primitivesCoverage` - usage statistics

---

## Configuration Layer: Central Source of Truth

**Location**: `/roadmap/config/roadmap.config.ts`

This file defines:
- All 20 phases with metadata
- All 20 categories with emoji and phase mapping
- Global roadmap statistics

This is the **single source of truth** for roadmap structure.

---

## Category Organization

Each category folder (e.g., `development-devops.ts`) contains:

```typescript
export const CATEGORY_NAME: Category = {
  id: 'category-id',
  name: 'Category Name',
  emoji: '🎯',
  phaseNumber: 1,
  description: '...',
  folder: '/src/core/api/category-id/',
  integrationCount: 10,
  integrations: [], // populated as integrations are created
  status: 'Planning'
};
```

---

## Integration Implementation

Each integration lives in its corresponding category folder:

```
/src/core/api/development-devops/
├── github.ts                  # GitHub integration
├── gitlab.ts                  # GitLab integration
├── index.ts                   # Category index
└── ... (8 more integrations)
```

### Example Integration File Structure:

```typescript
import { Integration, Primitive } from '../../../types/integration';

export const GITHUB: Integration = {
  id: 'github',
  name: 'GitHub',
  description: 'Git repository and workflow automation',
  category: 'Development & DevOps',
  categoryId: 'development-devops',
  phaseNumber: 1,
  status: 'Planning',
  primitives: [Primitive.BotWebhooks, Primitive.MiniApps],
  useCases: [
    {
      title: 'PR Notifications',
      description: 'Post new PRs to group chat',
      primitives: [Primitive.BotWebhooks]
    },
    // ... more use cases
  ],
  difficulty: 'medium',
  estimatedEffort: '3-4 weeks',
  tags: ['devops', 'ci-cd', 'popular']
};

export default GITHUB;
```

---

## Adding a New Integration

### Step 1: Choose the Category
Find the correct category from phases 1-20.

### Step 2: Create Integration File
Copy `roadmap/templates/integration-template.ts` to:
```
/src/core/api/{category-id}/{integration-name}.ts
```

### Step 3: Fill in the Template
- Update `id`, `name`, `description`
- Set `categoryId` and `phaseNumber`
- List all relevant primitives
- Add 3-5 detailed use cases
- Set `difficulty` and `estimatedEffort`
- Add dependencies and tags

### Step 4: Update Category Index
Edit `/roadmap/categories/{category-id}.ts`:
```typescript
import { INTEGRATION_NAME } from '../../src/core/api/...';

// Add to integrations array:
export const CATEGORY: Category = {
  // ...
  integrations: [
    INTEGRATION_NAME,
    // ... other integrations
  ]
};
```

### Step 5: Update Configuration
Edit `/roadmap/config/roadmap.config.ts`:
```typescript
// Update integration count if needed
totalIntegrations: 155 // increment by 1
```

---

## Development Workflow

### Viewing Category Status
```typescript
import { DEVELOPMENT_DEVOPS } from './roadmap/categories/development-devops';

console.log(DEVELOPMENT_DEVOPS.integrationCount);  // 10
console.log(DEVELOPMENT_DEVOPS.integrations);      // Array of integrations
```

### Querying by Phase
```typescript
import { PHASES } from './roadmap/config/roadmap.config';

const phase1 = PHASES[1];
console.log(phase1.name);           // 'Development & DevOps'
console.log(phase1.totalIntegrations); // 10
```

### Filtering by Primitive
```typescript
import { GITHUB } from './src/core/api/development-devops/github';

const usesWebhooks = GITHUB.primitives.includes(Primitive.BotWebhooks);
const webhookUseCases = GITHUB.useCases.filter(
  uc => uc.primitives.includes(Primitive.BotWebhooks)
);
```

---

## Type Safety

The entire system is **fully type-safe** with TypeScript:
- All enums are strict
- All interfaces are required/optional as specified
- IDE autocomplete works across all files
- Type checking ensures consistency

---

## Updating Roadmap Metadata

Edit `/roadmap/config/roadmap.config.ts`:

```typescript
export const ROADMAP_METADATA: RoadmapMetadata = {
  version: '2.0.0',
  lastUpdated: '2026-07-02',
  totalPhases: 20,
  totalCategories: 20,
  totalIntegrations: 154,
  primitivesCoverage: {
    'Bot Webhooks': { usage: 140, percentage: 91 },
    'Mini Apps': { usage: 95, percentage: 62 },
    'OIDC OAuth': { usage: 45, percentage: 29 },
    'Points System': { usage: 25, percentage: 16 }
  }
};
```

---

## Best Practices

1. **Always use the template** when creating new integrations
2. **Keep types consistent** - don't deviate from TypeScript definitions
3. **Update config** whenever adding integrations
4. **Add meaningful tags** for filtering and discovery
5. **Document dependencies** when integrations rely on each other
6. **Use emojis** in category definitions for visual hierarchy
7. **Estimate effort** accurately (easy/medium/hard)
8. **Write clear descriptions** for each use case

---

## Future Enhancements

- [ ] Integration status dashboard
- [ ] Dependency graph visualization
- [ ] Primitives coverage reporting
- [ ] Phase completion tracking
- [ ] Integration difficulty heatmap
- [ ] Automated integration generation
- [ ] Integration priority scoring
