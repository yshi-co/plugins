# 📋 LLM Best Practices Guide

**Best practices for effectively and safely using LLMs in your development workflow.**

## Table of Contents

- [Ask Smart Questions](#ask-smart-questions)
- [Frame Your Context](#frame-your-context)
- [Provide Good Examples](#provide-good-examples)
- [Review LLM Output](#review-llm-output)
- [Use LLMs For](#use-llms-for)
- [Don't Use LLMs For](#dont-use-llms-for)
- [Integration-Specific Tips](#integration-specific-tips)

## Ask Smart Questions

### Structure Your Questions

```
BEFORE:  "How do I do X?"
AFTER:   "I'm trying to [goal]. I'm using [tech/tool]. 
          What are the best practices and gotchas I should know?"
```

### Examples of Good Questions

**For Architecture:**
```
"I'm designing a webhook integration with Yshi API.
According to the documentation, what are the critical 
design patterns for handling webhook validation and retry logic?"
```

**For Debugging:**
```
"I'm getting a 401 error when calling the Yshi API.
My authentication flow (redacted) follows the OAuth pattern.
What are common causes of API authentication failures?"
```

**For Optimization:**
```
"Looking at the Yshi documentation, what's the recommended 
approach for batching webhook events to reduce API calls?"
```

**For Learning:**
```
"Can you explain how Mini Apps work in Yshi?
I'm trying to understand the architecture and best practices."
```

### Examples of Bad Questions

```
❌ "Why is my code broken?"
   (Provide context and error messages)

❌ "Here's my full production setup, fix it"
   (Redact secrets and provide specific problem)

❌ "Can you write all the code for me?"
   (LLMs are best for teaching, not doing everything)

❌ "Is this secure?"
   (Provide the actual code you want reviewed)
```

## Frame Your Context

### Always Provide Context

```
Good context includes:
✅ What you're trying to achieve
✅ What tools/frameworks you're using
✅ What you've already tried
✅ What specific error or issue you're facing
✅ Links to relevant documentation
✅ Environment/versions (without secrets)

Context to NEVER provide:
❌ API keys or tokens
❌ User data or PII
❌ Real URLs or internal infrastructure
❌ Real config values
```

### Example with Good Context

```
"I'm building a Yshi Mini App for displaying customer data.
I'm using React and TypeScript.
According to docs.yshi.co, I need to implement OAuth flow.

I've tried using the standard OAuth pattern, but I'm getting 
a CORS error when the redirect comes back.

Environment: React 18, TypeScript 5, running locally on port 3000

The error is: 'Access-Control-Allow-Origin' header missing

What could cause this and how do I debug it?"

[NO API KEY, NO REAL DOMAIN, NO REAL USER DATA]
```

### Example with Poor Context

```
"My Yshi setup isn't working"
[This gives the LLM nothing to work with]
```

## Provide Good Examples

### Share Patterns, Not Implementations

```typescript
// ❌ BAD - Shows real implementation
"Here's my webhook handler with real error handling and logging:
const webhook = async (req, res) => {
  const signature = req.headers['x-yshi-signature'];
  // ... validation logic with actual key
  const key = process.env.WEBHOOK_SECRET; // [secret_pattern_would_appear_here]
  if (!validate(signature, key)) {
    // ... real error handling
  }
}"

// ✅ GOOD - Shows pattern with placeholders
"Here's my webhook validation pattern:
1. Extract signature from headers
2. Load webhook secret from environment
3. Validate signature
4. Parse and process event
5. Return 200 OK or specific error code

What's the best practice for handling validation failures?
Should I retry, log, or both?"
```

### Share Pseudocode Instead

```
❌ BAD - Real code with real values
```

✅ GOOD - Pseudocode pattern
```
webhook handler pattern:
  1. extract signature from request
  2. verify signature with secret
  3. if valid:
       - parse event
       - process based on event type
       - acknowledge with 200
  4. if invalid:
       - log security event
       - return 401
  5. error handling:
       - timeout after X seconds
       - retry on failure
```

## Review LLM Output

### Always Verify

```
For every code snippet an LLM provides:

1. ✅ Read through it completely
2. ✅ Check for hardcoded values
3. ✅ Verify it uses environment variables
4. ✅ Check error handling
5. ✅ Run it in a test environment
6. ✅ Review security implications
7. ✅ Check for best practices
8. ✅ Test edge cases
```

### Red Flags in LLM Output

```typescript
// 🚩 RED FLAG: Hardcoded secrets
const API_KEY = process.env.API_KEY; // ✅ Use env vars, never hardcode!

// 🚩 RED FLAG: No error handling
const data = await fetch(url).then(r => r.json()); // What if it fails?

// 🚩 RED FLAG: Synchronous blocking
const result = fs.readFileSync(file); // OK for small files only

// 🚩 RED FLAG: No input validation
function processWebhook(data) {
  return data.user.id; // What if data.user doesn't exist?
}

// 🚩 RED FLAG: Missing security checks
app.post('/webhook', (req, res) => {
  // Missing signature validation!
  processEvent(req.body);
});
```

### Test LLM Code

```typescript
// Always run in dev first
import { testWebhookHandler } from './test';

testWebhookHandler({
  valid: true,
  data: { /* test data */ },
  expectedResult: 'success',
});

// Test edge cases
testWebhookHandler({
  valid: false,
  data: null,
  expectedResult: 'error',
});

// Test security
testWebhookHandler({
  signature: 'invalid',
  expectedResult: 'rejected',
});
```

## Use LLMs For

### ✅ Code Generation
- Scaffolding new modules
- Writing boilerplate
- Generating repetitive code
- Creating test cases

```
"Generate the skeleton for a webhook handler in TypeScript
that validates signatures and processes events"
```

### ✅ Debugging Help
- Understanding error messages
- Figuring out what went wrong
- Exploring potential causes
- Brainstorming solutions

```
"I'm getting this error [error message]. 
What could cause it and how would I debug it?"
```

### ✅ Documentation
- Writing comments
- Explaining concepts
- Creating guides
- Generating examples

```
"Help me write clear documentation for how 
Yshi webhooks work for my team"
```

### ✅ Code Review Assistance
- Spotting common mistakes
- Suggesting improvements
- Finding security issues
- Recommending optimizations

```
"Here's my (redacted) webhook handler pattern.
What are the potential issues and improvements?"
```

### ✅ Architecture Discussions
- Thinking through design
- Exploring patterns
- Considering trade-offs
- Planning implementations

```
"Should I use polling or webhooks for real-time updates?
What are the pros and cons?"
```

### ✅ Learning & Understanding
- Explaining new concepts
- Clarifying specifications
- Teaching best practices
- Exploring examples

```
"Explain how OAuth works in simple terms"
```

### ✅ Optimization
- Performance suggestions
- Efficiency improvements
- Resource optimization
- Scaling strategies

```
"How can I optimize my webhook processing 
to handle 10K requests per second?"
```

## Don't Use LLMs For

### ❌ Production Deployments
- Don't ask LLM for final production code
- Always review and test thoroughly
- Use code review processes
- Have security review before deploy

### ❌ Security Decisions
- Don't let LLM make security calls alone
- Always consult security team
- Follow security best practices
- Implement defense in depth

### ❌ Architecture Authority
- LLMs can suggest, not dictate
- Always validate against your needs
- Consider your specific constraints
- Team decision-making is essential

### ❌ Business Logic
- Don't let LLM write critical business logic unreviewed
- Complex domain logic needs expert review
- Validate against requirements
- Test extensively

### ❌ Compliance
- LLMs don't know your compliance requirements
- HIPAA, GDPR, SOC2 need expert handling
- Always consult compliance team
- Document all compliance decisions

### ❌ Sensitive Data
- Never give LLM real user data
- Never give LLM real business data
- Never give LLM real financial data
- Always anonymize or use examples

## Integration-Specific Tips

### For Yshi Integrations

**Safe Practices:**
```
✅ Ask about Yshi API patterns
✅ Ask about webhook validation
✅ Ask about Mini App best practices
✅ Ask about error handling patterns
✅ Reference docs.yshi.co

❌ Paste your actual API keys
❌ Paste your actual webhook URLs
❌ Paste your actual configuration
❌ Paste real customer data
```

**Example Questions:**
```
"According to Yshi documentation, what's the recommended 
error handling for webhook retries?"

"How should I structure my Mini App to follow Yshi 
best practices for state management?"

"What's the proper OAuth flow for Yshi integrations?"
```

### For Webhook Integrations

**Safe Practices:**
```
✅ Ask about signature validation patterns
✅ Ask about retry strategies
✅ Ask about error handling
✅ Ask about testing strategies
✅ Ask about monitoring

❌ Paste your webhook secret
❌ Paste your webhook URL
❌ Paste real event payloads with data
❌ Paste real signatures
```

**Example Questions:**
```
"What's the best pattern for webhook signature validation?"

"How should I handle webhook timeouts and retries?"

"What's a good testing strategy for webhook handlers?"
```

### For Authentication

**Safe Practices:**
```
✅ Ask about OAuth patterns
✅ Ask about token storage
✅ Ask about refresh strategies
✅ Ask about security best practices
✅ Ask about error scenarios

❌ Paste your tokens
❌ Paste your credentials
❌ Paste real OAuth responses
❌ Paste your private keys
```

**Example Questions:**
```
"What's the best way to securely store OAuth tokens?"

"How should I handle token expiration and refresh?"

"What are the security considerations for implementing OAuth?"
```

---

**Remember:** LLMs are tools to enhance your thinking, not replace it.
Always use your judgment and expertise.
