/**
 * When2meet Integration Constants
 */

export const WHEN2MEET_CONSTANTS = {
  // Integration metadata
  name: 'When2meet',
  id: 'when2meet',
  version: '1.0.0',
  
  // API endpoints
  endpoints: {
    auth: '/auth',
    webhook: '/webhook',
    events: '/events',
  },
  
  // Event types
  eventTypes: {
    CREATE: 'create',
    UPDATE: 'update',
    DELETE: 'delete',
    ACTION: 'action',
  },
  
  // Status codes
  statusCodes: {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    RATE_LIMITED: 429,
    SERVER_ERROR: 500,
  },
  
  // Error messages
  errors: {
    INVALID_CONFIG: 'Invalid configuration provided',
    AUTH_FAILED: 'Authentication failed',
    WEBHOOK_FAILED: 'Webhook processing failed',
    RATE_LIMIT_EXCEEDED: 'Rate limit exceeded',
  },
} as const;

export default WHEN2MEET_CONSTANTS;
