# Roadmap Quick Reference

## Structure at a Glance

```
BEDROCK (Foundation)
├── Types: /src/types/integration.ts
└── Config: /roadmap/config/roadmap.config.ts

ROADMAP SYSTEM
├── 20 Phases
├── 20 Categories
└── 154+ Integrations

IMPLEMENTATION
└── /src/core/api/{category-id}/{integration-name}.ts
```

---

## Quick Access

### View All Phases
```typescript
import { PHASES } from './roadmap/config/roadmap.config';

Object.values(PHASES).forEach(phase => {
  console.log(`Phase ${phase.number}: ${phase.name}`);
});
```

### View All Categories
```typescript
import { 
  DEVELOPMENT_DEVOPS,
  CRM_SALES,
  ECOMMERCE_SHOPPING,
  // ... import all 20
} from './roadmap/categories';
```

### Get Statistics
```typescript
import { ROADMAP_METADATA } from './roadmap/config/roadmap.config';

console.log(`Total Integrations: ${ROADMAP_METADATA.totalIntegrations}`);
console.log(`Total Phases: ${ROADMAP_METADATA.totalPhases}`);
console.log(`Bot Webhooks Usage: ${ROADMAP_METADATA.primitivesCoverage['Bot Webhooks'].percentage}%`);
```

---

## Files & Their Purpose

| File | Purpose | Ownership |
|------|---------|-----------|
| `/src/types/integration.ts` | Type definitions (bedrock) | Core team |
| `/roadmap/config/roadmap.config.ts` | Central configuration | Roadmap owner |
| `/roadmap/categories/*.ts` | Category definitions | Integration leads |
| `/src/core/api/{category}/*.ts` | Integration implementations | Developers |
| `/roadmap/templates/integration-template.ts` | Integration skeleton | Core team |
| `/roadmap/docs/ROADMAP_STRUCTURE.md` | Full guide | Documentation |

---

## Integration Lifecycle

1. **Planning** → Create in template, add to category
2. **In Progress** → Update status, begin implementation
3. **Active** → Feature complete, in production
4. **On Hold** → Paused due to dependencies or priorities
5. **Deprecated** → Sunset and replaced

---

## Phases at a Glance

| Phase | Name | Count | Status |
|-------|------|-------|--------|
| 1 | Development & DevOps | 10 | 🟡 Planning |
| 2 | CRM & Sales | 8 | 🟡 Planning |
| 3 | E-commerce & Payments | 10 | 🟡 Planning |
| 4 | Content & Community | 18 | 🟡 Planning |
| 5 | Cloud Storage & Infrastructure | 8 | 🟡 Planning |
| 6 | AI & Language Models | 7 | 🟡 Planning |
| 7 | Finance & Cryptocurrency | 10 | 🟡 Planning |
| 8 | Social Media & Content Creators | 10 | 🟡 Planning |
| 9 | Productivity & Collaboration | 15 | 🟡 Planning |
| 10 | Calendar & Scheduling | 7 | 🟡 Planning |
| 11 | Communication & Support | 10 | 🟡 Planning |
| 12 | Monitoring & Observability | 8 | 🟡 Planning |
| 13 | Forums & Community Platforms | 6 | 🟡 Planning |
| 14 | Gaming & Entertainment | 6 | 🟡 Planning |
| 15 | Analytics & Business Intelligence | 7 | 🟡 Planning |
| 16 | Email & Marketing Automation | 7 | 🟡 Planning |
| 17 | Automation & Workflow Platforms | 5 | 🟡 Planning |
| 18 | Translation & Localization | 4 | 🟡 Planning |
| 19 | Weather & News | 4 | 🟡 Planning |
| 20 | Maps & Location Services | 4 | 🟡 Planning |

**Total**: 154 integrations across 20 phases

---

## Primitives Overview

| Primitive | Usage | Example |
|-----------|-------|---------|
| Bot Webhooks | 140 (91%) | GitHub webhooks, Slack notifications |
| Mini Apps | 95 (62%) | Embedded dashboards, forms |
| OIDC OAuth | 45 (29%) | Social login, secure API access |
| Points System | 25 (16%) | Rewards, gamification, micropayments |

---

## Key Concepts

### Phase
A strategic grouping of related integrations (e.g., "Development & DevOps")

### Category
Maps 1:1 to a phase, contains multiple integrations

### Integration
A single service integration (e.g., GitHub, Slack, Shopify)

### Use Case
A specific feature or capability of an integration

### Primitive
A core Yshi API capability used by integrations

---

## Common Tasks

### Add a New Integration
1. Copy integration template
2. Place in `/src/core/api/{category-id}/{integration-name}.ts`
3. Update category index file
4. Update `roadmap.config.ts` if needed

### Update Integration Status
Edit the integration file's `status` field:
```typescript
status: 'In Progress' as const
```

### Change Integration Difficulty
Edit the integration file's `difficulty` field:
```typescript
difficulty: 'hard' // 'easy' | 'medium' | 'hard'
```

### View Categories by Phase
```typescript
import { PHASES } from './roadmap/config/roadmap.config';

const phase = PHASES[1];
console.log(phase.categories); // ['development-devops']
```

---

## Documentation Links

- **Full Structure Guide**: `roadmap/docs/ROADMAP_STRUCTURE.md`
- **Type Definitions**: `src/types/integration.ts`
- **Configuration**: `roadmap/config/roadmap.config.ts`
- **API Docs**: https://docs.yshi.co/

---

## Support

For questions about the roadmap structure, refer to:
1. `ROADMAP_STRUCTURE.md` for comprehensive guide
2. `integration-template.ts` for creating new integrations
3. Existing integration files for examples

For API questions:
- Visit https://docs.yshi.co/
- Check Bot Webhooks, Mini Apps, OAuth, Points System documentation
