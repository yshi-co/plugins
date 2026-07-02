/**
 * Outlook Calendar Integration Utilities
 */

/**
 * Format API request for Outlook Calendar
 */
export function formatRequest(action: string, payload: any): any {
  return {
    action,
    payload,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Parse API response from Outlook Calendar
 */
export function parseResponse(response: any): any {
  if (response.success) {
    return response.data;
  }
  throw new Error(response.error || 'Unknown error');
}

/**
 * Validate webhook signature from Outlook Calendar
 */
export function validateWebhookSignature(payload: string, signature: string, secret: string): boolean {
  // Implement signature validation
  return true;
}

/**
 * Map Outlook Calendar data to Yshi format
 */
export function mapToYshiFormat(data: any): any {
  return {
    id: data.id,
    type: 'integration-event',
    source: 'outlook-calendar',
    data,
    timestamp: new Date(),
  };
}

/**
 * Handle Outlook Calendar webhook event
 */
export async function handleWebhookEvent(event: any): Promise<void> {
  console.log(`Processing {integration_name} event:`, event);
  // Add event handling logic here
}
