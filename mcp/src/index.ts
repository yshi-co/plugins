/**
 * Yshi Model Context Protocol (MCP) Server
 * Enables LLMs to interact with Yshi API for integration development
 * Based on: https://docs.yshi.co
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  TextContent,
  Tool,
  Resource,
} from '@modelcontextprotocol/sdk/types/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import axios, { AxiosInstance } from 'axios';
import crypto from 'crypto';

/**
 * Yshi MCP Server Configuration
 */
interface YshiConfig {
  apiKey?: string;
  baseUrl: string;
  apiVersion: string;
  timeout: number;
}

/**
 * Yshi API Client
 */
class YshiClient {
  private client: AxiosInstance;
  private apiKey: string | undefined;

  constructor(config: YshiConfig) {
    this.apiKey = config.apiKey || process.env.YSHI_API_KEY;

    this.client = axios.create({
      baseURL: config.baseUrl,
      timeout: config.timeout,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Yshi-MCP-Server/1.0.0',
        ...(this.apiKey && { 'Authorization': `Bearer ${this.apiKey}` }),
      },
    });
  }

  /**
   * Verify webhook signature (HMAC-SHA256)
   */
  verifyWebhookSignature(
    payload: string,
    signature: string,
    secret: string
  ): boolean {
    const hmac = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');
    return hmac === signature;
  }

  /**
   * Generate webhook signature
   */
  generateWebhookSignature(payload: any, secret: string): string {
    const payloadString = typeof payload === 'string' ? payload : JSON.stringify(payload);
    return crypto
      .createHmac('sha256', secret)
      .update(payloadString)
      .digest('hex');
  }

  /**
   * Create a webhook
   */
  async createWebhook(config: {
    url: string;
    events: string[];
    active?: boolean;
  }): Promise<any> {
    const response = await this.client.post('/webhooks', config);
    return response.data;
  }

  /**
   * List webhooks
   */
  async listWebhooks(): Promise<any[]> {
    const response = await this.client.get('/webhooks');
    return response.data;
  }

  /**
   * Test webhook
   */
  async testWebhook(webhookId: string): Promise<any> {
    const response = await this.client.post(`/webhooks/${webhookId}/test`);
    return response.data;
  }

  /**
   * Create Mini App
   */
  async createMiniApp(config: {
    name: string;
    url: string;
    description?: string;
  }): Promise<any> {
    const response = await this.client.post('/mini-apps', config);
    return response.data;
  }

  /**
   * Get Mini App configuration
   */
  async getMiniAppConfig(miniAppId: string): Promise<any> {
    const response = await this.client.get(`/mini-apps/${miniAppId}`);
    return response.data;
  }

  /**
   * Create OAuth application
   */
  async createOAuthApp(config: {
    name: string;
    redirectUris: string[];
    description?: string;
  }): Promise<any> {
    const response = await this.client.post('/oauth/applications', config);
    return response.data;
  }

  /**
   * Get OAuth token
   */
  async getOAuthToken(code: string, clientId: string, clientSecret: string): Promise<any> {
    const response = await this.client.post('/oauth/token', {
      grant_type: 'authorization_code',
      code,
      client_id: clientId,
      client_secret: clientSecret,
    });
    return response.data;
  }

  /**
   * Award points to user
   */
  async awardPoints(userId: string, points: number, reason: string): Promise<any> {
    const response = await this.client.post(`/users/${userId}/points`, {
      amount: points,
      reason,
    });
    return response.data;
  }

  /**
   * Get user points
   */
  async getUserPoints(userId: string): Promise<any> {
    const response = await this.client.get(`/users/${userId}/points`);
    return response.data;
  }

  /**
   * Get API documentation
   */
  async getDocumentation(section: string): Promise<string> {
    // In real implementation, this would fetch from docs.yshi.co
    const docs: Record<string, string> = {
      webhooks: 'https://docs.yshi.co/api/webhooks',
      'mini-apps': 'https://docs.yshi.co/api/mini-apps',
      oauth: 'https://docs.yshi.co/api/oauth',
      points: 'https://docs.yshi.co/api/points',
      authentication: 'https://docs.yshi.co/api/authentication',
      'event-types': 'https://docs.yshi.co/webhooks/event-types',
      'error-codes': 'https://docs.yshi.co/api/errors',
    };
    return docs[section] || 'https://docs.yshi.co';
  }
}

/**
 * Yshi MCP Server
 */
class YshiMCPServer {
  private server: Server;
  private yshiClient: YshiClient;

  constructor() {
    this.server = new Server(
      {
        name: 'yshi-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
          resources: {},
        },
      }
    );

    this.yshiClient = new YshiClient({
      baseUrl: process.env.YSHI_API_URL || 'https://api.yshi.co/v1',
      apiVersion: 'v1',
      timeout: 30000,
    });

    this.setupHandlers();
  }

  /**
   * Setup MCP request handlers
   */
  private setupHandlers(): void {
    // Handle tool listing
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return { tools: this.getTools() };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      return await this.handleToolCall(request.params);
    });

    // Handle resource listing
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      return { resources: this.getResources() };
    });

    // Handle resource reading
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      return await this.handleResourceRead(request.params.uri);
    });
  }

  /**
   * Get available tools
   */
  private getTools(): Tool[] {
    return [
      {
        name: 'verify_webhook_signature',
        description:
          'Verify a Yshi webhook signature using HMAC-SHA256. Use this to validate webhook authenticity.',
        inputSchema: {
          type: 'object',
          properties: {
            payload: {
              type: 'string',
              description: 'The webhook payload as a string (usually req.body raw)',
            },
            signature: {
              type: 'string',
              description: 'The signature from x-yshi-signature header',
            },
            secret: {
              type: 'string',
              description: 'The webhook secret (from environment variable)',
            },
          },
          required: ['payload', 'signature', 'secret'],
        },
      },

      {
        name: 'generate_webhook_signature',
        description:
          'Generate a Yshi webhook signature. Use this for testing webhook handlers.',
        inputSchema: {
          type: 'object',
          properties: {
            payload: {
              type: 'string',
              description: 'The webhook payload (JSON or string)',
            },
            secret: {
              type: 'string',
              description: 'The webhook secret',
            },
          },
          required: ['payload', 'secret'],
        },
      },

      {
        name: 'get_webhook_guidelines',
        description: 'Get best practices and guidelines for implementing Yshi webhooks',
        inputSchema: {
          type: 'object',
          properties: {
            topic: {
              type: 'string',
              enum: ['validation', 'retry', 'security', 'testing', 'error-handling'],
              description: 'Specific webhook topic',
            },
          },
          required: ['topic'],
        },
      },

      {
        name: 'get_mini_app_guidelines',
        description: 'Get best practices for building Yshi Mini Apps',
        inputSchema: {
          type: 'object',
          properties: {
            topic: {
              type: 'string',
              enum: ['setup', 'state-management', 'styling', 'security', 'testing'],
              description: 'Specific Mini App topic',
            },
          },
          required: ['topic'],
        },
      },

      {
        name: 'get_oauth_flow',
        description: 'Get the OAuth flow implementation guide for Yshi integrations',
        inputSchema: {
          type: 'object',
          properties: {
            flow_type: {
              type: 'string',
              enum: ['authorization-code', 'client-credentials', 'refresh-token'],
              description: 'Type of OAuth flow',
            },
          },
          required: ['flow_type'],
        },
      },

      {
        name: 'get_points_system_guide',
        description: 'Get guidance on implementing the Yshi Points System',
        inputSchema: {
          type: 'object',
          properties: {
            aspect: {
              type: 'string',
              enum: ['earning', 'redeeming', 'leaderboards', 'analytics'],
              description: 'Specific aspect of Points System',
            },
          },
          required: ['aspect'],
        },
      },

      {
        name: 'validate_webhook_structure',
        description: 'Validate the structure of a webhook event',
        inputSchema: {
          type: 'object',
          properties: {
            event_type: {
              type: 'string',
              description: 'The webhook event type (e.g., "user.created")',
            },
            event_data: {
              type: 'string',
              description: 'The event data as JSON string',
            },
          },
          required: ['event_type', 'event_data'],
        },
      },

      {
        name: 'get_integration_template',
        description: 'Get a template for creating a new Yshi integration',
        inputSchema: {
          type: 'object',
          properties: {
            integration_type: {
              type: 'string',
              enum: ['webhook', 'oauth', 'mini-app', 'hybrid'],
              description: 'Type of integration',
            },
            language: {
              type: 'string',
              enum: ['typescript', 'python', 'javascript'],
              description: 'Programming language',
            },
          },
          required: ['integration_type'],
        },
      },

      {
        name: 'get_error_guide',
        description: 'Get help understanding and debugging Yshi API errors',
        inputSchema: {
          type: 'object',
          properties: {
            error_code: {
              type: 'string',
              description: 'HTTP error code or error name (e.g., "401", "INVALID_SIGNATURE")',
            },
          },
          required: ['error_code'],
        },
      },

      {
        name: 'get_api_documentation',
        description: 'Get links to specific Yshi API documentation',
        inputSchema: {
          type: 'object',
          properties: {
            section: {
              type: 'string',
              enum: [
                'webhooks',
                'mini-apps',
                'oauth',
                'points',
                'authentication',
                'event-types',
                'error-codes',
              ],
              description: 'Documentation section',
            },
          },
          required: ['section'],
        },
      },
    ];
  }

  /**
   * Get available resources
   */
  private getResources(): Resource[] {
    return [
      {
        uri: 'yshi://docs/webhooks',
        name: 'Yshi Webhooks Documentation',
        description: 'Complete guide to implementing Yshi webhooks',
        mimeType: 'text/markdown',
      },
      {
        uri: 'yshi://docs/mini-apps',
        name: 'Yshi Mini Apps Guide',
        description: 'Build interactive Mini Apps for Yshi',
        mimeType: 'text/markdown',
      },
      {
        uri: 'yshi://docs/oauth',
        name: 'Yshi OAuth Implementation',
        description: 'OAuth 2.0 integration with Yshi',
        mimeType: 'text/markdown',
      },
      {
        uri: 'yshi://docs/points',
        name: 'Yshi Points System',
        description: 'Gamification and rewards system',
        mimeType: 'text/markdown',
      },
      {
        uri: 'yshi://templates/webhook',
        name: 'Webhook Integration Template',
        description: 'TypeScript template for webhook handling',
        mimeType: 'text/plain',
      },
      {
        uri: 'yshi://templates/oauth',
        name: 'OAuth Integration Template',
        description: 'TypeScript template for OAuth flow',
        mimeType: 'text/plain',
      },
      {
        uri: 'yshi://guidelines/security',
        name: 'Security Guidelines',
        description: 'Yshi integration security best practices',
        mimeType: 'text/markdown',
      },
      {
        uri: 'yshi://guidelines/errors',
        name: 'Error Handling Guide',
        description: 'How to handle Yshi API errors',
        mimeType: 'text/markdown',
      },
    ];
  }

  /**
   * Handle tool calls
   */
  private async handleToolCall(params: any): Promise<{ content: TextContent[] }> {
    const { name, arguments: args } = params;

    try {
      let result: any;

      switch (name) {
        case 'verify_webhook_signature': {
          const isValid = this.yshiClient.verifyWebhookSignature(
            args.payload,
            args.signature,
            args.secret
          );
          result = {
            valid: isValid,
            message: isValid ? 'Webhook signature is valid' : 'Webhook signature is invalid',
          };
          break;
        }

        case 'generate_webhook_signature': {
          const signature = this.yshiClient.generateWebhookSignature(args.payload, args.secret);
          result = {
            signature,
            note: 'Use this signature in x-yshi-signature header for testing',
          };
          break;
        }

        case 'get_webhook_guidelines': {
          result = this.getWebhookGuidelines(args.topic);
          break;
        }

        case 'get_mini_app_guidelines': {
          result = this.getMiniAppGuidelines(args.topic);
          break;
        }

        case 'get_oauth_flow': {
          result = this.getOAuthFlow(args.flow_type);
          break;
        }

        case 'get_points_system_guide': {
          result = this.getPointsSystemGuide(args.aspect);
          break;
        }

        case 'validate_webhook_structure': {
          result = this.validateWebhookStructure(args.event_type, args.event_data);
          break;
        }

        case 'get_integration_template': {
          result = this.getIntegrationTemplate(args.integration_type, args.language);
          break;
        }

        case 'get_error_guide': {
          result = this.getErrorGuide(args.error_code);
          break;
        }

        case 'get_api_documentation': {
          result = await this.yshiClient.getDocumentation(args.section);
          break;
        }

        default:
          throw new Error(`Unknown tool: ${name}`);
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error: any) {
      return {
        content: [
          {
            type: 'text',
            text: `Error: ${error.message}`,
          },
        ],
      };
    }
  }

  /**
   * Handle resource reads
   */
  private async handleResourceRead(uri: string): Promise<{ contents: TextContent[] }> {
    if (uri === 'yshi://docs/webhooks') {
      return {
        contents: [
          {
            type: 'text',
            text: this.getWebhookDocumentation(),
          },
        ],
      };
    }

    if (uri === 'yshi://guidelines/security') {
      return {
        contents: [
          {
            type: 'text',
            text: this.getSecurityGuidelines(),
          },
        ],
      };
    }

    if (uri === 'yshi://templates/webhook') {
      return {
        contents: [
          {
            type: 'text',
            text: this.getWebhookTemplate(),
          },
        ],
      };
    }

    return {
      contents: [
        {
          type: 'text',
          text: `Resource not found: ${uri}`,
        },
      ],
    };
  }

  // Helper methods for guidelines and templates...

  private getWebhookGuidelines(topic: string): string {
    const guidelines: Record<string, string> = {
      validation:
        'Always validate webhook signatures using HMAC-SHA256. Load webhook secret from environment variables, never hardcode.',
      retry: 'Implement exponential backoff for webhook retries. Max 3 retries with increasing delays.',
      security:
        'Always HTTPS, validate signatures, use environment variables for secrets, log without exposing sensitive data.',
      testing: 'Test webhook handlers locally with signature verification. Use test events from Yshi documentation.',
      'error-handling':
        'Return 200 OK immediately after validating signature. Handle errors asynchronously to prevent timeouts.',
    };
    return guidelines[topic] || 'Unknown topic';
  }

  private getMiniAppGuidelines(topic: string): string {
    const guidelines: Record<string, string> = {
      setup:
        'Configure Mini App URL in Yshi dashboard. Ensure URL is publicly accessible and HTTPS only.',
      'state-management': 'Use React hooks for state. Store persistent data in backend API, not localStorage.',
      styling: 'Follow Yshi design system. Use provided component library for consistency.',
      security:
        'Always validate user authentication. Use CORS headers properly. Never expose API keys to frontend.',
      testing: 'Test locally with Yshi sandbox environment. Use provided test fixtures.',
    };
    return guidelines[topic] || 'Unknown topic';
  }

  private getOAuthFlow(flowType: string): string {
    const flows: Record<string, string> = {
      'authorization-code':
        'User authorizes your app, receives code. Exchange code for access token using client secret.',
      'client-credentials': 'Service-to-service auth. Exchange client ID and secret for access token.',
      'refresh-token': 'Use refresh token to get new access token when current one expires.',
    };
    return flows[flowType] || 'Unknown flow type';
  }

  private getPointsSystemGuide(aspect: string): string {
    const guides: Record<string, string> = {
      earning: 'Award points for user actions. Use the /users/{id}/points POST endpoint.',
      redeeming: 'Allow users to exchange points. Validate point balance before redemption.',
      leaderboards: 'Query top users by points. Implement pagination for large datasets.',
      analytics: 'Track points earned and redeemed. Monitor engagement metrics.',
    };
    return guides[aspect] || 'Unknown aspect';
  }

  private validateWebhookStructure(eventType: string, eventData: string): any {
    try {
      const data = JSON.parse(eventData);
      return {
        valid: true,
        eventType,
        dataKeys: Object.keys(data),
        message: 'Webhook structure looks valid',
      };
    } catch (error) {
      return {
        valid: false,
        error: 'Invalid JSON in event data',
      };
    }
  }

  private getIntegrationTemplate(integrationType: string, language: string = 'typescript'): string {
    if (integrationType === 'webhook' && language === 'typescript') {
      return `
// Yshi Webhook Handler Template
import crypto from 'crypto';

export async function handleWebhook(req: any, res: any) {
  try {
    // 1. Verify signature
    const signature = req.headers['x-yshi-signature'];
    const secret = process.env.YSHI_WEBHOOK_SECRET;
    
    if (!verifySignature(req.body, signature, secret)) {
      return res.status(401).json({ error: 'Invalid signature' });
    }
    
    // 2. Parse event
    const event = req.body;
    
    // 3. Handle event
    switch (event.type) {
      case 'user.created':
        await handleUserCreated(event.data);
        break;
      default:
        console.log('Unhandled event type:', event.type);
    }
    
    // 4. Acknowledge
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

function verifySignature(payload: any, signature: string, secret: string): boolean {
  const hmac = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  return hmac === signature;
}
`;
    }
    return 'Template not found for selected options';
  }

  private getErrorGuide(errorCode: string): any {
    const errors: Record<string, any> = {
      '401': 'Unauthorized - Check API key and authentication headers',
      '403': 'Forbidden - Check permissions and scope',
      '404': 'Not Found - Verify resource ID and endpoint',
      '429': 'Rate Limited - Implement exponential backoff',
      INVALID_SIGNATURE: 'Webhook signature validation failed - Check secret and payload',
      EXPIRED_TOKEN: 'Token expired - Refresh using refresh token',
    };
    return errors[errorCode] || { message: 'Unknown error code' };
  }

  private getWebhookDocumentation(): string {
    return `# Yshi Webhooks

Webhooks allow you to receive real-time notifications from Yshi.

## Setup

1. Create webhook endpoint
2. Configure in Yshi dashboard
3. Verify signatures
4. Handle events

## Signature Verification

All webhooks include x-yshi-signature header with HMAC-SHA256 signature.

## Retry Policy

Failed deliveries retry with exponential backoff (max 3 attempts).

See: https://docs.yshi.co/api/webhooks`;
  }

  private getSecurityGuidelines(): string {
    return `# Yshi Integration Security

## DO:
- Use environment variables for all secrets
- Validate webhook signatures
- Use HTTPS for all connections
- Rotate secrets regularly
- Log without exposing sensitive data

## DON'T:
- Hardcode API keys
- Expose secrets in error messages
- Log webhook payloads
- Share secrets with LLMs
- Trust unauthenticated requests`;
  }

  private getWebhookTemplate(): string {
    return `// See: get_integration_template tool for full template`;
  }

  /**
   * Start the server
   */
  async start(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Yshi MCP Server started successfully');
  }
}

/**
 * Main entry point
 */
async function main(): Promise<void> {
  const server = new YshiMCPServer();
  await server.start();
}

main().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
