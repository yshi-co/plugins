# 💡 Examples: Good vs Bad LLM Interactions

**Real-world examples of good and bad ways to ask LLMs for help.**

## Example 1: Webhook Authentication

### ❌ BAD Interaction

```
User: "Why isn't this working?"

[Pastes entire webhook handler with real secret key and webhook URL]

const webhook = async (req, res) => {
  const signature = req.headers['x-yshi-signature'];
  const secret = 'ws_live_abc123def456ghi789jkl012mnopqr';
  
  if (!validateSignature(signature, secret)) {
    res.status(401).send('Unauthorized');
  }
  
  const event = req.body;
  if (event.type === 'user.created') {
    await handleUserCreated(event);
  }
};

Problems with this interaction:
❌ Shared webhook secret (ws_live_...)
❌ Shared webhook URL pattern
❌ Shared real event handler logic
❌ No context about what's actually failing
❌ LLM has no idea what the specific problem is
```

### ✅ GOOD Interaction

```
User: "I'm implementing webhook handling for Yshi integrations.
The webhook signature validation is failing.

My pattern:
1. Extract signature from headers
2. Load secret from environment
3. Validate signature
4. Process event based on type

I'm getting 401 errors even though the request looks valid.
The webhook is sending:
- Header: x-yshi-signature: [signature]
- Body: JSON event data

The validation function is returning false when it should return true.

What could cause signature validation to fail?"

Better because:
✅ Explains the goal clearly
✅ Describes the pattern (no real code)
✅ States the specific problem
✅ Asks about causes
✅ No real secrets exposed
✅ LLM can help debug the actual issue
```

---

## Example 2: Configuration Review

### ❌ BAD Interaction

```
User: "Please review my configuration setup"

[Pastes .env file content]

.env file contents (REDACTED):
DATABASE_URL=${DATABASE_URL}
YSHI_API_KEY=${YSHI_API_KEY}
WEBHOOK_SECRET=${WEBHOOK_SECRET}
STRIPE_KEY=${STRIPE_KEY}
GITHUB_TOKEN=${GITHUB_TOKEN}
REDIS_PASSWORD=${REDIS_PASSWORD}
AWS_SECRET_KEY=${AWS_SECRET_KEY}

Problems with sharing actual values:
❌ ALL secrets exposed
❌ Database password visible
❌ API keys for multiple services
❌ GitHub token exposed
❌ Redis password exposed
❌ AWS secret exposed
❌ This is a CRITICAL breach
```

### ✅ GOOD Interaction

```
User: "I'm setting up environment configuration for Yshi.
Here's my structure (with secrets redacted):

DATABASE_URL=[REDACTED]
YSHI_API_KEY=[REDACTED]
WEBHOOK_SECRET=[REDACTED]
STRIPE_KEY=[REDACTED]
GITHUB_TOKEN=[REDACTED]
REDIS_PASSWORD=[REDACTED]
AWS_SECRET_KEY=[REDACTED]

Is this the right approach?
Should I add any other environment variables?
What are the security best practices for config management?"

Better because:
✅ Shows structure clearly
✅ Demonstrates proper redaction
✅ Asks about completeness
✅ Asks about best practices
✅ No actual secrets exposed
✅ LLM can give helpful guidance
```

---

## Example 3: Error Debugging

### ❌ BAD Interaction

```
User: "Getting errors in production"

[Pastes production logs - REDACTED for privacy]

[ERROR] 2024-07-02 10:15:43 - Request failed
User: [REDACTED]
Timestamp: 2024-07-02T10:15:43Z
Email: [REDACTED]
IP: [REDACTED]
Authorization: Bearer [REDACTED]
API Key: [REDACTED]

Error: Failed to update user profile

Why this is bad if NOT redacted:
❌ Real customer name and email exposed
❌ Real customer ID exposed
❌ Real IP address exposed
❌ Real bearer token exposed
❌ Real API key exposed
❌ GDPR violation
```

### ✅ GOOD Interaction

```
User: "I'm getting authentication failures in production
when updating user profiles.

The error:
- Status: 401 Unauthorized
- Endpoint: /api/users/{id}/profile
- Method: PATCH
- Rate: ~2% of requests

My authentication flow:
1. Client sends JWT token
2. Server validates token signature
3. Server checks token expiration
4. Server processes request

It works fine in staging but fails in production.
What could cause this specific issue?"

Better because:
✅ Describes the problem clearly
✅ Includes error details (no secrets)
✅ Describes the flow (no implementation)
✅ Notes the failure rate
✅ Asks about root causes
✅ No PII exposed
```

---

## Example 4: Code Quality Review

### ❌ BAD Interaction

```
User: "Is this code secure?"

[Pastes actual production code]

exports.handler = async (event) => {
  const apiKey = process.env.YSHI_API_KEY; // ✅ Using env var
  const webhookSecret = process.env.WEBHOOK_SECRET; // ✅ Using env var
  
  // Validate webhook
  const signature = event.headers['x-yshi-signature'];
  const isValid = crypto
    .createHmac('sha256', webhookSecret)
    .update(event.body)
    .digest('hex') === signature;
    
  if (!isValid) {
    console.log(`Invalid signature from ${event.sourceIp}`);
    return { statusCode: 401 };
  }
  
  // Handle event
  if (event.body.type === 'user.created') {
    const user = event.body.data;
    await db.query(`INSERT INTO users (email, name) VALUES ('${user.email}', '${user.name}')`);
  }
};

Problems:
❌ Real secrets in comments
❌ Actual implementation visible
❌ Has SQL injection vulnerability (obvious now!)
❌ Logging IP addresses
❌ Can't review this securely anyway
```

### ✅ GOOD Interaction

```
User: "I'm implementing webhook handling for Yshi.
Here's my (redacted) approach:

1. Extract signature from headers
2. Validate signature using HMAC-SHA256
3. Parse event body
4. Handle different event types
5. Update database with event data

I'm concerned about:
- SQL injection prevention
- Rate limiting
- Error handling
- Logging strategies

What security best practices should I follow?"

[Then they share pattern, not real code]

Better because:
✅ Describes approach clearly
✅ Lists specific concerns
✅ Asks about best practices
✅ No actual code exposed
✅ LLM can give targeted advice
✅ User can then implement securely
```

---

## Example 5: Feature Implementation

### ❌ BAD Interaction

```
User: "Help me build this feature"

[Shares entire implementation with real data]

async function syncCustomers() {
  const response = await fetch('https://api.salesforce.internal/customers', {
    headers: {
      'Authorization': `Bearer ${process.env.SALESFORCE_TOKEN}`
    }
  });
  
  const customers = await response.json();
  
  customers.forEach(customer => {
    db.query(`INSERT INTO customers VALUES ('${customer.id}', '${customer.email}', '${customer.phone}')`);
  });
}

Problems:
❌ Real internal URLs exposed
❌ Token in example (even if from env)
❌ SQL injection vulnerability visible
❌ No error handling
❌ Synchronous loop inefficient
```

### ✅ GOOD Interaction

```
User: "I need to implement customer synchronization
from Salesforce to our local database.

High-level approach:
1. Fetch customers from Salesforce API
2. Transform data to our schema
3. Insert/update in local database
4. Handle errors and retries

Key concerns:
- How to safely handle large datasets?
- What's the best error handling pattern?
- Should I use transactions or batch inserts?
- How do I handle updates vs inserts?

What's the recommended pattern?"

Better because:
✅ Clear goal stated
✅ High-level approach described
✅ Specific concerns listed
✅ No actual code or real data
✅ No internal URLs
✅ No real tokens
✅ LLM can give architectural advice
```

---

## Example 6: API Integration

### ❌ BAD Interaction

```
User: "How do I integrate with Yshi?"

[No context provided]

This is too vague. LLM has to guess what you need.
```

### ✅ GOOD Interaction

```
User: "I'm integrating my SaaS platform with Yshi.
Specifically, I want to:

1. Send real-time notifications to users via Yshi bots
2. Display a dashboard Mini App showing user analytics
3. Authenticate users with OAuth

Based on docs.yshi.co, I understand:
- Bot Webhooks handle events
- Mini Apps provide UI
- OAuth handles authentication

My questions:
1. Should I push notifications or use webhooks?
2. How do I set state in Mini Apps?
3. What's the OAuth flow for SaaS integrations?

What are the recommended patterns?"

Better because:
✅ Clear use cases stated
✅ Shows understanding of Yshi concepts
✅ References public documentation
✅ Asks specific questions
✅ No implementation details yet
✅ LLM can guide architecture
```

---

## Example 7: Troubleshooting

### ❌ BAD Interaction

```
User: "It's broken"

This gives LLM nothing to work with.
```

### ✅ GOOD Interaction

```
User: "Mini App isn't displaying in Yshi chat.

Error symptoms:
- The component loads in my local dev server
- React renders without errors
- In Yshi, I see a blank space instead of the app
- Browser console shows no errors
- Network tab shows 200 responses

What I've tried:
- Checked the endpoint is responding
- Verified CORS headers
- Tested with different browsers
- Reviewed the Yshi documentation

Debugging questions:
1. What could prevent Mini App rendering in Yshi?
2. How do I test Mini App integration locally?
3. Where should I look for errors?
4. Is there a specific format Yshi expects?"

Better because:
✅ Describes symptoms clearly
✅ Lists what's working
✅ Lists what's been tried
✅ Shows troubleshooting progress
✅ Asks targeted questions
✅ LLM can help narrow down cause
```

---

## Example 8: Performance Discussion

### ❌ BAD Interaction

```
User: "How do I make this faster?"

[Pastes 200 lines of production code with real data]

This exposes everything without solving the problem.
```

### ✅ GOOD INTERACTION

```
User: "I'm processing webhook events from Yshi.
Currently handling ~1000 events/second.

Current approach:
1. Receive webhook event
2. Validate signature
3. Query database for user context
4. Apply business logic
5. Write result back to database

Performance metrics:
- Average latency: 500ms per event
- Database queries: 2-3 per event
- Memory usage: ~200MB baseline

Bottlenecks I suspect:
- Database queries might be slow
- Business logic might be inefficient

Questions:
1. Should I use caching?
2. Should I batch process events?
3. Should I use async workers?
4. What's the recommended pattern?"

Better because:
✅ Clear performance goal stated
✅ Current approach described
✅ Metrics provided
✅ Suspected issues identified
✅ No actual code or real data
✅ Asks about patterns/solutions
✅ LLM can recommend optimization strategy
```

---

## Quick Reference: Good vs Bad

| Aspect | ❌ Bad | ✅ Good |
|--------|--------|---------|
| **Secrets** | Shares them | Redacts them |
| **PII** | Includes real data | Uses anonymized data |
| **URLs** | Real internal domains | Placeholder domains |
| **Code** | Full implementation | Pattern/pseudocode |
| **Context** | Vague or missing | Clear and specific |
| **Question** | "Fix my code" | "How should I approach..." |
| **Data** | Production data | Example/test data |
| **Assumption** | "It's safe" | "It might not be" |

---

**Golden Rule:** Would I be comfortable if this was published on Twitter?
If not, don't paste it to an LLM.
