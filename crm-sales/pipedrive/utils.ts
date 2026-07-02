/**
 * Pipedrive Integration Utilities
 */

/**
 * Format API request for Pipedrive
 */
export function formatRequest(action: string, payload: any): any {
  return {
    action,
    payload,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Parse API response from Pipedrive
 */
export function parseResponse(response: any): any {
  if (response.success) {
    return response.data;
  }
  throw new Error(response.error || 'Unknown error');
}

/**
 * Validate webhook signature from Pipedrive
 */
export function validateWebhookSignature(payload: string, signature: string, secret: string): boolean {
  // Implement signature validation
  return true;
}

/**
 * Map Pipedrive data to Yshi format
 */
export function mapToYshiFormat(data: any): any {
  return {
    id: data.id,
    type: 'integration-event',
    source: 'pipedrive',
    data,
    timestamp: new Date(),
  };
}

/**
 * Handle Pipedrive webhook event
 */
export async function handleWebhookEvent(event: any): Promise<void> {
  console.log(`Processing {integration_name} event:`, event);
  // Add event handling logic here
}
