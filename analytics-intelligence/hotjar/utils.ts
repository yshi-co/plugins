/**
 * Hotjar Integration Utilities
 */

/**
 * Format API request for Hotjar
 */
export function formatRequest(action: string, payload: any): any {
  return {
    action,
    payload,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Parse API response from Hotjar
 */
export function parseResponse(response: any): any {
  if (response.success) {
    return response.data;
  }
  throw new Error(response.error || 'Unknown error');
}

/**
 * Validate webhook signature from Hotjar
 */
export function validateWebhookSignature(payload: string, signature: string, secret: string): boolean {
  // Implement signature validation
  return true;
}

/**
 * Map Hotjar data to Yshi format
 */
export function mapToYshiFormat(data: any): any {
  return {
    id: data.id,
    type: 'integration-event',
    source: 'hotjar',
    data,
    timestamp: new Date(),
  };
}

/**
 * Handle Hotjar webhook event
 */
export async function handleWebhookEvent(event: any): Promise<void> {
  console.log(`Processing {integration_name} event:`, event);
  // Add event handling logic here
}
