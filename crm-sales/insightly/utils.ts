/**
 * Insightly Integration Utilities
 */

/**
 * Format API request for Insightly
 */
export function formatRequest(action: string, payload: any): any {
  return {
    action,
    payload,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Parse API response from Insightly
 */
export function parseResponse(response: any): any {
  if (response.success) {
    return response.data;
  }
  throw new Error(response.error || 'Unknown error');
}

/**
 * Validate webhook signature from Insightly
 */
export function validateWebhookSignature(payload: string, signature: string, secret: string): boolean {
  // Implement signature validation
  return true;
}

/**
 * Map Insightly data to Yshi format
 */
export function mapToYshiFormat(data: any): any {
  return {
    id: data.id,
    type: 'integration-event',
    source: 'insightly',
    data,
    timestamp: new Date(),
  };
}

/**
 * Handle Insightly webhook event
 */
export async function handleWebhookEvent(event: any): Promise<void> {
  console.log(`Processing {integration_name} event:`, event);
  // Add event handling logic here
}
