# 🤖 Yshi MCP (Model Context Protocol) Server

**A complete Model Context Protocol server that enables LLMs (Claude, ChatGPT, Copilot, etc.) to safely interact with Yshi integrations.**

Based on [Yshi API Documentation](https://docs.yshi.co)

## Table of Contents

- [Overview](#overview)
- [What is MCP?](#what-is-mcp)
- [Installation](#installation)
- [Configuration](#configuration)
- [Tools](#tools)
- [Resources](#resources)
- [Usage Examples](#usage-examples)
- [Security](#security)
- [Development](#development)

## Overview

The Yshi MCP Server allows LLMs to:
- ✅ **Safely verify webhook signatures** without exposing secrets
- ✅ **Generate webhook signatures** for testing
- ✅ **Access Yshi best practices** and guidelines
- ✅ **Get integration templates** for different scenarios
- ✅ **Understand error codes** and debugging
- ✅ **Learn OAuth flows** and patterns
- ✅ **Access complete documentation** links

### Why MCP for Yshi?

Traditional LLM interactions with APIs are risky:
- ❌ You have to paste secrets to ask questions
- ❌ You have to paste real data for debugging
- ❌ You have to share implementation details

With Yshi MCP:
- ✅ **No secrets needed** - Verification happens server-side
- ✅ **Safe debugging** - LLM never sees sensitive data
- ✅ **Best practices** - Built-in guidelines and templates
- ✅ **Documentation** - Always up-to-date references

## What is MCP?

The Model Context Protocol is a standard for connecting LLMs with external tools and data sources. Think of it like plugins for LLMs.

**How it works:**
1. LLM requests a tool or resource
2. MCP server processes the request
3. Server returns safe, useful information
4. LLM uses the information without accessing anything dangerous

## Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install the MCP server
npm install @yshi/mcp-server

# Or clone and build from source
git clone https://github.com/yshi-co/roadmap.git
cd roadmap/mcp
npm install
npm run build
```

### Configure LLM to Use MCP

#### For Claude (via Claude Desktop)

1. Install Claude Desktop: [claude.ai/download](https://claude.ai/download)

2. Configure MCP in `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "yshi": {
      "command": "node",
      "args": ["/path/to/mcp/dist/index.js"],
      "env": {
        "YSHI_API_KEY": "your-api-key-here",
        "YSHI_API_URL": "https://api.yshi.co/v1"
      }
    }
  }
}
```

#### For ChatGPT (via Custom GPT with OpenAI)

1. Create a new Custom GPT
2. Add as External Tool in GPT Builder
3. Configure the MCP server endpoint

#### For GitHub Copilot

Use VS Code extension with MCP support:

```bash
# Install extension
code --install-extension yshi.copilot-mcp-server
```

## Configuration

### Environment Variables

```bash
# Yshi API Configuration
YSHI_API_KEY=your-api-key-here              # Optional - for API calls
YSHI_API_URL=https://api.yshi.co/v1        # Default: shown
YSHI_WEBHOOK_SECRET=your-webhook-secret    # Optional - for webhook testing

# Server Configuration
MCP_PORT=3000                                # Optional server port
NODE_ENV=production                          # production or development
```

### .env File

```bash
# Create .env file in mcp/ directory
YSHI_API_KEY=[YOUR_API_KEY]
YSHI_WEBHOOK_SECRET=[YOUR_WEBHOOK_SECRET]
```

## Tools

### 1. `verify_webhook_signature`

**Purpose:** Verify webhook signatures without exposing secrets

**Usage:**
```
User: "Verify this webhook signature"
[Provides payload, signature, and secret]

MCP Server: Verifies locally, returns true/false
LLM: Can help debug signature validation issues
```

**Inputs:**
- `payload` (string) - The webhook payload
- `signature` (string) - The x-yshi-signature header value
- `secret` (string) - The webhook secret

**Output:**
```json
{
  "valid": true,
  "message": "Webhook signature is valid"
}
```

### 2. `generate_webhook_signature`

**Purpose:** Generate valid webhook signatures for testing

**Usage:**
```
User: "Generate a test signature for this payload"
MCP: Generates valid signature
User: Can now test webhook handler locally
```

**Inputs:**
- `payload` (string) - The webhook payload
- `secret` (string) - The webhook secret

**Output:**
```json
{
  "signature": "abc123def456...",
  "note": "Use this signature in x-yshi-signature header for testing"
}
```

### 3. `get_webhook_guidelines`

**Purpose:** Get best practices for webhook implementation

**Topics:**
- `validation` - Signature validation best practices
- `retry` - Retry strategy recommendations
- `security` - Security guidelines
- `testing` - Testing approaches
- `error-handling` - Error handling patterns

**Example:**
```
User: "What are best practices for webhook validation?"
MCP: Returns validation guidelines
LLM: Helps implement based on guidelines
```

### 4. `get_mini_app_guidelines`

**Purpose:** Get Mini App implementation guidance

**Topics:**
- `setup` - Initial configuration
- `state-management` - State handling
- `styling` - Design patterns
- `security` - Security considerations
- `testing` - Testing strategies

### 5. `get_oauth_flow`

**Purpose:** Understand OAuth flows

**Flow Types:**
- `authorization-code` - Standard OAuth flow
- `client-credentials` - Service-to-service auth
- `refresh-token` - Token refresh flow

### 6. `get_points_system_guide`

**Purpose:** Gamification system guidance

**Aspects:**
- `earning` - How to award points
- `redeeming` - How to handle redemptions
- `leaderboards` - Leaderboard implementation
- `analytics` - Tracking and metrics

### 7. `validate_webhook_structure`

**Purpose:** Validate webhook event JSON structure

**Input:**
```json
{
  "event_type": "user.created",
  "event_data": "{\"id\": \"user_123\", \"email\": \"user@example.com\"}"
}
```

**Output:**
```json
{
  "valid": true,
  "eventType": "user.created",
  "dataKeys": ["id", "email"],
  "message": "Webhook structure looks valid"
}
```

### 8. `get_integration_template`

**Purpose:** Get code templates for integrations

**Types:**
- `webhook` - Webhook handler
- `oauth` - OAuth flow
- `mini-app` - Mini App setup
- `hybrid` - Multiple primitives

**Languages:**
- `typescript` (recommended)
- `python`
- `javascript`

### 9. `get_error_guide`

**Purpose:** Understand and debug errors

**Error Codes:**
- HTTP: `401`, `403`, `404`, `429`, etc.
- Yshi-specific: `INVALID_SIGNATURE`, `EXPIRED_TOKEN`, etc.

### 10. `get_api_documentation`

**Purpose:** Get links to Yshi documentation

**Sections:**
- `webhooks` - Webhook API docs
- `mini-apps` - Mini App documentation
- `oauth` - OAuth implementation
- `points` - Points system
- `authentication` - Authentication methods
- `event-types` - Available event types
- `error-codes` - Error code reference

## Resources

Resources provide longer-form content that LLMs can reference:

### `yshi://docs/webhooks`
Complete webhook implementation guide

### `yshi://docs/mini-apps`
Mini App development guide

### `yshi://docs/oauth`
OAuth integration guide

### `yshi://docs/points`
Points system implementation guide

### `yshi://templates/webhook`
TypeScript webhook handler template

### `yshi://templates/oauth`
TypeScript OAuth integration template

### `yshi://guidelines/security`
Security best practices

### `yshi://guidelines/errors`
Error handling guide

## Usage Examples

### Example 1: Verify Webhook Signature

```
User (to Claude with MCP):
"I'm having trouble with webhook signature validation. 
Can you help me verify this signature?

Payload: {\"type\":\"user.created\",\"id\":\"123\"}
Signature: abc123...
Secret: [REDACTED]"

Claude (using MCP):
1. Calls verify_webhook_signature tool
2. MCP server verifies locally (secret never exposed to Claude)
3. Claude receives: "valid: true"
4. Claude: "Your signature is valid! The issue might be in..."

Result: Claude can help debug without seeing the secret!
```

### Example 2: Get Implementation Template

```
User: "I need to build a webhook handler in TypeScript"

Claude:
1. Calls get_integration_template with typescript + webhook
2. MCP returns complete template
3. Claude: "Here's the recommended structure..."

Result: Consistent, secure implementation pattern
```

### Example 3: Understand OAuth Flow

```
User: "How do I implement OAuth for my Yshi integration?"

Claude:
1. Calls get_oauth_flow with authorization-code
2. MCP returns flow description
3. Calls get_integration_template with oauth + typescript
4. Claude: "Follow this flow: [explains with template]"

Result: Complete OAuth implementation guide
```

### Example 4: Debug Error

```
User: "I'm getting a 401 error from Yshi API"

Claude:
1. Calls get_error_guide with "401"
2. MCP returns possible causes
3. Claude: "401 means unauthorized. Check your API key..."

Result: Targeted debugging assistance
```

## Security

### Key Security Features

1. **Secrets Never Leave Local Machine**
   - Webhook secret verification happens server-side only
   - LLM never receives the secret

2. **No Data Exposure**
   - Tools return only necessary information
   - Personal data never exposed

3. **Guardrails Built-In**
   - Guidelines promote best practices
   - Templates follow security patterns
   - Templates use environment variables, never hardcode secrets

4. **Documentation References**
   - Links to official Yshi docs
   - Always up-to-date information
   - No stale examples

### Using MCP Securely

```typescript
// ✅ SECURE - With MCP
"Claude, verify this webhook signature"
[Provide: payload, signature, secret]
// MCP verifies locally, Claude never sees secret

// ❌ UNSAFE - Without MCP
"Here's my webhook handler with secret sk_live_abc123"
[Claude sees everything]
```

### Environment Variable Protection

```bash
# Use environment variables (never hardcode)
export YSHI_API_KEY="your-key-here"
export YSHI_WEBHOOK_SECRET="your-secret-here"

# MCP server reads these, LLM never sees them
```

## Development

### Build from Source

```bash
# Clone repository
git clone https://github.com/yshi-co/roadmap.git
cd roadmap/mcp

# Install dependencies
npm install

# Build
npm run build

# Watch for changes
npm run watch

# Start server
npm run dev
```

### Project Structure

```
mcp/
├── src/
│   └── index.ts           # Main MCP server
├── dist/                  # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

### Adding New Tools

To add a new tool to the MCP server:

1. Add tool definition in `getTools()`
2. Add handler in `handleToolCall()`
3. Implement helper method
4. Test locally

```typescript
// In getTools()
{
  name: 'my_new_tool',
  description: 'Description of what it does',
  inputSchema: {
    type: 'object',
    properties: {
      param1: { type: 'string', description: '...' },
    },
    required: ['param1'],
  },
}

// In handleToolCall()
case 'my_new_tool':
  result = this.myNewToolImplementation(args.param1);
  break;

// New method
private myNewToolImplementation(param: string): any {
  // Implementation
}
```

### Testing

```bash
# Run tests
npm run test

# Test specific tool
npm test -- --testNamePattern="verify_webhook_signature"
```

## Troubleshooting

### MCP Server Not Starting

```bash
# Check Node version
node --version  # Should be 18+

# Check for port conflicts
lsof -i :3000

# Check environment variables
echo $YSHI_API_KEY
```

### Claude Not Connecting to MCP

**macOS/Windows:**
- Restart Claude Desktop
- Verify config file path
- Check file permissions

**Verify config:**
```bash
# macOS
cat ~/Library/Application\ Support/Claude/claude_desktop_config.json

# Windows
type %APPDATA%\Claude\claude_desktop_config.json
```

### Tool Returning Errors

```bash
# Check server logs
npm run dev

# Enable debug mode
DEBUG=* npm run dev

# Test tool directly
curl -X POST http://localhost:3000/verify_webhook_signature \
  -H "Content-Type: application/json" \
  -d '{"payload": "...", "signature": "...", "secret": "..."}'
```

## Examples & Patterns

### Good MCP Usage

```
✅ "Verify this webhook signature"
✅ "Generate a test signature for debugging"
✅ "What are webhook best practices?"
✅ "Give me a TypeScript webhook template"
✅ "How do I handle this API error?"
```

### Risky Without MCP

```
❌ "Here's my API key, help me debug"
❌ "My webhook secret is sk_live_abc123, why isn't it working?"
❌ "Here's my .env file, review it"
```

## Contributing

Contributions welcome! Areas for improvement:

- [ ] More integration templates
- [ ] API error catalog expansion
- [ ] Performance optimization
- [ ] Additional tool implementations
- [ ] Multi-language support

## License

MIT License - See LICENSE file

## Support

- 📚 **Documentation:** [docs.yshi.co](https://docs.yshi.co)
- 💬 **Discord:** [discord.gg/yshi](https://discord.gg/yshi)
- 📧 **Email:** [support@yshi.co](mailto:support@yshi.co)
- 🐛 **Issues:** [GitHub Issues](https://github.com/yshi-co/roadmap/issues)

## Related Resources

- [Yshi API Documentation](https://docs.yshi.co)
- [Model Context Protocol Spec](https://modelcontextprotocol.io)
- [Yshi Integration Guide](../README.md)
- [LLM Guardrails Guide](../docs/llm-guardrails/README.md)

---

**Made with ❤️ by the Yshi Team**

For secure LLM-assisted Yshi integration development!
