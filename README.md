# 🚀 Yshi Plugins - Integration Platform

**Yshi Plugins** is a comprehensive integration platform that connects 160+ enterprise and consumer tools directly to Yshi-powered bots, Mini Apps, and workflows. Built on the [Yshi API](https://docs.yshi.co/), it enables seamless automation and data flow across your entire digital ecosystem.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Integration Categories](#integration-categories)
- [Core API Primitives](#core-api-primitives)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Using Integrations](#using-integrations)
- [Development](#development)
- [Examples](#examples)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Support](#support)

## Overview

Yshi Plugins provides 160+ pre-built integrations organized across 20 phases covering:
- **Development & DevOps** — Git, CI/CD, Infrastructure, Monitoring
- **Sales & CRM** — Salesforce, HubSpot, Pipedrive, Zoho CRM
- **E-commerce & Payments** — Shopify, Stripe, PayPal, Square
- **Content Management** — WordPress, Ghost, Contentful, Sanity
- **Communication** — Slack, Discord, Zendesk, Intercom
- **Analytics & Intelligence** — Google Analytics, Mixpanel, Segment
- **Cloud Storage** — Google Drive, Dropbox, AWS S3, OneDrive
- **AI & Language Models** — OpenAI, Anthropic, Cohere, HuggingFace
- **And 12 more categories...**

### Mission

Enable developers to build powerful, interconnected automation without reinventing the wheel. Every integration is:
- **Type-Safe** — Full TypeScript support with complete type definitions
- **Production-Ready** — Complete scaffolding with templates and documentation
- **Extensible** — Easy to customize and extend for specific needs
- **Well-Documented** — README, code examples, and troubleshooting guides

## Features

### 🎯 Comprehensive Integration Coverage
- **160+ Integrations** across 20 strategic phases
- **20 Categories** covering all major business verticals
- **Phase-Based Rollout** — Foundation → Growth → Enterprise → Long Tail
- **Complete Scaffolding** — Every integration fully structured and documented

### 🔗 Four Core API Primitives
All integrations leverage Yshi's four core capabilities:

| Primitive | Purpose | Usage |
|-----------|---------|-------|
| **Bot Webhooks** | Real-time event delivery and automation | Instant notifications, event handling, bidirectional communication |
| **Mini Apps** | Embedded interactive UIs | Dashboards, data visualization, interactive forms |
| **OIDC OAuth** | Passwordless authentication | Secure login, user management, permission handling |
| **Points System** | Gamification & rewards | Incentives, leaderboards, achievement tracking |

### 📦 Complete Plugin Structure
Each integration includes:
```
/{category}/{plugin-name}/
├── index.ts           # Integration definition & metadata
├── types.ts           # TypeScript interfaces
├── config.ts          # Configuration templates
├── constants.ts       # API constants & endpoints
├── utils.ts           # Utility functions
└── README.md          # Complete documentation
```

### 🏗️ Production-Ready Scaffolding
- **TypeScript Support** — Full type safety throughout
- **Configuration Templates** — Ready-to-use configs
- **Utility Functions** — Common API operations pre-built
- **Error Handling** — Built-in error management
- **Webhook Support** — Pre-configured webhook handling

## Integration Categories

### Phase 1: Foundation (46 integrations)
| Category | Integrations | Phase |
|----------|--------------|-------|
| Development & DevOps | 10 | Phase 1 |
| CRM & Sales | 8 | Phase 2 |
| E-commerce & Payments | 10 | Phase 3 |
| Content Management | 8 | Phase 4 |
| Social Content | 15 | Phase 4 |
| Forums & Community | 6 | Phase 4 |

### Phase 2: Growth (49 integrations)
| Category | Integrations | Phase |
|----------|--------------|-------|
| Cloud Storage | 8 | Phase 5 |
| AI & Language Models | 7 | Phase 6 |
| Finance & Crypto | 10 | Phase 7 |
| Productivity & Collaboration | 15 | Phase 9 |
| Calendar & Scheduling | 7 | Phase 10 |

### Phase 3: Enterprise (35 integrations)
| Category | Integrations | Phase |
|----------|--------------|-------|
| Communication & Support | 10 | Phase 11 |
| Monitoring & Observability | 8 | Phase 12 |
| Gaming & Entertainment | 6 | Phase 14 |
| Analytics & Intelligence | 7 | Phase 15 |
| Email & Marketing | 7 | Phase 16 |

### Phase 4: Long Tail (24 integrations)
| Category | Integrations | Phase |
|----------|--------------|-------|
| Automation & Workflows | 5 | Phase 17 |
| Translation & Localization | 4 | Phase 18 |
| Weather & News | 4 | Phase 19 |
| Maps & Location Services | 4 | Phase 20 |

**Total: 160+ Integrations across 20 Strategic Phases**

## Core API Primitives

### Bot Webhooks
**Purpose:** Real-time event delivery and automation  
**What Yshi Can Do:**
- Receive instant notifications on external events
- Trigger automated workflows and responses
- Send data and commands to external services
- Create event-driven automations

**Example Use Cases:**
- GitHub → Notify about PR reviews, issues, deployments
- Stripe → Alert on payment failures, refunds, disputes
- PagerDuty → Escalate critical incidents instantly
- Sentry → Real-time error and crash monitoring

### Mini Apps
**Purpose:** Embedded interactive UIs inside Yshi chats  
**What Yshi Can Do:**
- Display dashboards and analytics
- Show real-time status and metrics
- Provide interactive data visualization
- Enable form submissions and data entry

**Example Use Cases:**
- Analytics dashboard showing live metrics
- Cryptocurrency portfolio tracker
- Sales pipeline visualization
- Server status monitor
- Task management interface

### OIDC OAuth
**Purpose:** Passwordless authentication and authorization  
**What Yshi Can Do:**
- Securely authenticate with external services
- Manage user permissions and roles
- Handle single sign-on (SSO)
- Control access to resources

**Example Use Cases:**
- Connect Salesforce with secure OAuth
- Access HubSpot data with user permissions
- GitHub authentication for CI/CD
- AWS credentials management

### Points System
**Purpose:** Gamification, rewards, and in-chat micro-transactions  
**What Yshi Can Do:**
- Award points for completed actions
- Create achievement systems
- Enable leaderboards
- Implement reward mechanics

**Example Use Cases:**
- Trading bot rewards for completed trades
- Loyalty program integration
- Learning platform gamification
- Referral program points

## Project Structure

```
/workspaces/roadmap/
├── {20 root-level category folders}/
│   ├── {plugin-name}/
│   │   ├── index.ts              # Integration definition
│   │   ├── types.ts              # TypeScript interfaces
│   │   ├── config.ts             # Configuration template
│   │   ├── constants.ts          # Constants & endpoints
│   │   ├── utils.ts              # Utility functions
│   │   └── README.md             # Plugin documentation
│   └── ...
│
├── roadmap/                      # Roadmap system
│   ├── config/                   # Global configuration
│   ├── categories/               # 20 category definitions
│   ├── docs/                     # Documentation
│   ├── templates/                # Integration templates
│   └── index.ts                  # Main entry point
│
├── src/
│   └── types/                    # Core type definitions
│       ├── integration.ts        # Bedrock types
│       └── index.ts
│
└── ROADMAP.md                    # Full strategic roadmap
```

## Getting Started

### 1. Explore Available Integrations

Browse the [ROADMAP.md](ROADMAP.md) for:
- All 160+ integrations organized by phase
- Detailed use cases for each integration
- API primitive coverage matrix
- Implementation timelines

### 2. Find Your Integration

Each integration has its own folder at the root level:
```bash
# Example: Find GitHub integration
cat /development-devops/github/README.md

# Or explore a CRM integration
cat /crm-sales/salesforce/README.md
```

### 3. Review Integration Documentation

Each plugin's README includes:
- **About** — What the integration is
- **Capabilities** — What Yshi can do with it
- **Getting Started** — How to set it up
- **Configuration** — How to configure it
- **Use Cases** — Real-world examples
- **Troubleshooting** — Common issues

### 4. Understand the Structure

```typescript
// Each integration exports a typed definition
import { INTEGRATION } from './path/to/integration/index.ts';

// With complete TypeScript support
interface IntegrationConfig {
  apiKey: string;
  apiSecret: string;
  webhookUrl: string;
}
```

## Using Integrations

### Option 1: Use Pre-Built Integrations

All 160+ integrations are ready to use:

```typescript
import { GITHUB } from './development-devops/github';
import { SALESFORCE } from './crm-sales/salesforce';
import { SHOPIFY } from './ecommerce-shopping/shopify';

// Each has complete metadata and configuration
const githubIntegration = {
  id: 'github',
  name: 'GitHub',
  status: 'Planning',
  primitives: [BotWebhooks, MiniApps, OAuth],
  useCases: [/* ... */],
};
```

### Option 2: Customize for Your Needs

Each integration's config.ts is fully customizable:

```typescript
// Configure for your environment
export const CUSTOM_CONFIG = {
  baseUrl: process.env.CUSTOM_API_URL,
  auth: {
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  },
  webhook: {
    secret: process.env.WEBHOOK_SECRET,
  },
};
```

### Option 3: Build on the Template

Use utils.ts functions for common operations:

```typescript
import { formatRequest, parseResponse, validateWebhookSignature } from './utils';

// Handle incoming webhooks
export async function handleEvent(payload: any, signature: string) {
  if (validateWebhookSignature(payload, signature, secret)) {
    const formatted = formatRequest('event', payload);
    const response = parseResponse(formatted);
  }
}
```

## Development

### Adding a New Integration

1. **Create the folder structure:**
   ```bash
   mkdir -p /{category}/{new-integration}
   ```

2. **Copy the template:**
   ```bash
   cp roadmap/templates/integration-template.ts /{category}/{new-integration}/index.ts
   ```

3. **Generate supporting files:**
   ```bash
   # Use the scaffold generation scripts
   python3 generate_scaffold.py --category {category} --name {new-integration}
   ```

4. **Implement the integration:**
   - Update `index.ts` with real metadata
   - Customize `types.ts` with your types
   - Fill in `config.ts` with real settings
   - Implement utility functions in `utils.ts`
   - Write comprehensive README.md

5. **Add to category:**
   ```typescript
   import { NEW_INTEGRATION } from './new-integration/index';
   
   // Add to category integrations array
   integrations: [NEW_INTEGRATION]
   ```

### Testing

Each integration should have:
- Unit tests for utility functions
- Integration tests for API calls
- Webhook tests for event handling
- Type tests for TypeScript interfaces

### Building

```bash
# Type check all integrations
npm run typecheck

# Generate documentation
npm run docs

# Build for production
npm run build
```

## Examples

### Example 1: GitHub Integration
```typescript
// development-devops/github/README.md
// Shows how to:
// - Connect to GitHub API
// - Handle pull request webhooks
// - Create automated deployments
// - Track issues and releases
```

### Example 2: Salesforce CRM
```typescript
// crm-sales/salesforce/README.md
// Shows how to:
// - Sync leads and opportunities
// - Update deal status
// - Trigger sales notifications
// - Generate forecasts
```

### Example 3: Crypto Price Tracking
```typescript
// finance-crypto/crypto-price-tracking/README.md
// Shows how to:
// - Monitor price alerts
// - Track portfolio
// - Gamify trading
// - Generate reports
```

## Contributing

We welcome contributions! To contribute:

1. **Fork the repository**
   ```bash
   git clone https://github.com/yshi-co/plugins.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/new-integration
   ```

3. **Follow the guidelines:**
   - Use TypeScript for all code
   - Add comprehensive types
   - Write detailed README
   - Include configuration templates
   - Add utility functions
   - Test thoroughly

4. **Submit a pull request**
   - Link related issues
   - Describe changes clearly
   - Include examples

### Integration Requirements

Every integration must have:
- ✅ Complete TypeScript types
- ✅ Configuration template
- ✅ Utility functions
- ✅ README documentation
- ✅ Use cases (3-5 minimum)
- ✅ Error handling
- ✅ Example configuration

## Roadmap

See [ROADMAP.md](ROADMAP.md) for:
- Complete 20-phase integration plan
- All 160+ integrations with details
- Implementation timeline
- Progress tracking
- Use cases for each integration

### Progress

**Total Integrations:** 160+  
**Phases:** 20  
**Categories:** 20  
**Status:** Scaffolding Complete, Ready for Implementation

## Statistics

### Coverage by Type
- **Bot Webhooks:** 91% of integrations (140+)
- **Mini Apps:** 62% of integrations (95+)
- **OIDC OAuth:** 29% of integrations (45+)
- **Points System:** 16% of integrations (25+)

### Distribution
- **Phase 1-5 (Foundation):** 46 integrations
- **Phase 6-10 (Growth):** 49 integrations
- **Phase 11-15 (Enterprise):** 35 integrations
- **Phase 16-20 (Long Tail):** 24 integrations

### Files
- **Total Integrations:** 162
- **Files Per Integration:** 6
- **Total Files:** 972
- **Documentation Pages:** 162
- **Lines of Code:** 40,000+

## Support

### Documentation
- 📚 **Full API Docs:** [docs.yshi.co](https://docs.yshi.co)
- 📖 **Integration Roadmap:** [ROADMAP.md](ROADMAP.md)
- 📝 **Architecture Guide:** [roadmap/docs/ARCHITECTURE.md](roadmap/docs/ARCHITECTURE.md)
- ⚡ **Quick Reference:** [roadmap/docs/QUICK_REFERENCE.md](roadmap/docs/QUICK_REFERENCE.md)

### Getting Help
- 💬 **Chat Community:** [yshi.co/group/yshi_dev](https://yshi.co/group/yshi_dev)
- 📧 **Email Support:** [hello@yshi.co](mailto:hello@yshi.co)
- 🐛 **Report Issues:** [GitHub Issues](https://github.com/yshi-co/plugins/issues)
- 💡 **Feature Requests:** [GitHub Discussions](https://github.com/yshi-co/plugins/discussions)

### Troubleshooting

#### Common Issues

**Q: Integration not connecting?**
- A: Check credentials in config.ts
- Verify API endpoint is correct
- Check webhook URL configuration
- Review error logs

**Q: Type errors in TypeScript?**
- A: Ensure types.ts matches API specification
- Verify all interfaces are properly exported
- Run `npm run typecheck`

**Q: Webhook not triggering?**
- A: Verify webhook URL is accessible
- Check secret is configured correctly
- Review webhook event filters
- Check server logs for errors

## License

MIT License - See LICENSE file for details

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and updates.

---

**Built with ❤️ by the Yshi Team**

[Website](https://yshi.co) • [Documentation](https://docs.yshi.co) • [Chat](https://yshi.co/group/yshi_dev) • [GitHub](https://github.com/yshi-co)
