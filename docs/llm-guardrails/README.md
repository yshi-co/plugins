# 🔒 LLM Guardrails & Security Guide

**Comprehensive guide for safely using Large Language Models (Claude, ChatGPT, Copilot, etc.) with Yshi integration code and sensitive data.**

## Table of Contents

- [Overview](#overview)
- [Critical Security Rules](#critical-security-rules)
- [What NEVER to Share](#what-never-to-share)
- [Safe Practices](#safe-practices)
- [LLM-Specific Guidance](#llm-specific-guidance)
- [Examples: Good vs Bad](#examples-good-vs-bad)
- [Checklist](#checklist)
- [Incident Response](#incident-response)

## Overview

This guide establishes firm boundaries for using LLMs in development workflows. LLMs are powerful tools for:
- Code generation and debugging
- Documentation and explanations
- Architecture discussions
- Refactoring suggestions
- Test generation

However, they require careful handling because:
- **No Privacy Guarantee**: Conversations may be logged or used for model training
- **Information Disclosure Risk**: Accidentally sharing secrets with LLMs could expose credentials
- **Context Pollution**: Sensitive information in code samples gets ingested into training data
- **Compliance Concerns**: Some industries (healthcare, finance) have strict data handling requirements

## Critical Security Rules

### 🚫 ABSOLUTE RULES (Non-Negotiable)

**Rule 1: NEVER Share Actual Secrets**
- ❌ NEVER paste real API keys
- ❌ NEVER paste real database passwords
- ❌ NEVER paste real auth tokens
- ❌ NEVER paste real webhook secrets
- ❌ NEVER paste real encryption keys
- ✅ ALWAYS use placeholder values like `YOUR_API_KEY_HERE` or `[REDACTED]`

**Rule 2: NEVER Share User Data**
- ❌ NEVER paste real email addresses from logs
- ❌ NEVER paste real IP addresses of customers
- ❌ NEVER paste real phone numbers
- ❌ NEVER paste real payment information
- ❌ NEVER paste real location data
- ✅ ALWAYS use anonymized examples: `user@example.com`, `192.168.1.1`, `+1-555-0000`

**Rule 3: NEVER Share Full File Paths or URLs**
- ❌ NEVER paste URLs that expose your domain structure
- ❌ NEVER paste file paths that reveal internal infrastructure
- ❌ NEVER paste webhook URLs with real domains
- ✅ ALWAYS use placeholders: `https://your-domain.com/`, `/path/to/config/`

**Rule 4: NEVER Share Environment Variables as-is**
- ❌ NEVER paste `.env` files
- ❌ NEVER paste `process.env` values containing secrets
- ❌ NEVER paste configuration files with actual values
- ✅ ALWAYS redact or use example values

**Rule 5: Think Before You Paste**
- ❌ NEVER assume something "looks safe"
- ❌ NEVER say "this is just a test key" (there's no such thing)
- ❌ NEVER share and then delete conversations hoping LLM forgets
- ✅ ALWAYS review every code snippet for embedded secrets

## What NEVER to Share

### Secrets & Credentials

```typescript
// ❌ WRONG - DO NOT SHARE (EXAMPLE)
// const config = {
//   STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
//   DATABASE_URL: process.env.DATABASE_URL,
//   GITHUB_TOKEN: process.env.GITHUB_TOKEN,
//   AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
// };

// ✅ CORRECT - USE PLACEHOLDERS
const config = {
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
};
```

### PII (Personally Identifiable Information)

```typescript
// ❌ WRONG - DO NOT SHARE
const users = [
  { id: 1, name: 'John Smith', email: 'john.smith@acme.com', phone: '+1-415-555-1234' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah.j@acme.com', phone: '+1-415-555-5678' },
];

// ✅ CORRECT - ANONYMIZE
const users = [
  { id: 1, name: 'User A', email: 'user@example.com', phone: '+1-555-0100' },
  { id: 2, name: 'User B', email: 'user@example.com', phone: '+1-555-0200' },
];
```

### Internal Infrastructure Details

```typescript
// ❌ WRONG - EXPOSES INFRASTRUCTURE
const API_ENDPOINTS = {
  auth: 'https://auth.internal.acme.com/api',
  database: 'https://db-prod.us-east-1.internal.acme.com:5432',
  cdn: 'https://cdn-primary.acme-infrastructure.com',
  monitoring: 'https://grafana.monitoring.acme.internal',
};

// ✅ CORRECT - GENERALIZED
const API_ENDPOINTS = {
  auth: 'https://your-auth-service.example.com/api',
  database: 'https://your-database.example.com:5432',
  cdn: 'https://your-cdn.example.com',
  monitoring: 'https://your-monitoring.example.com',
};
```

### Business Sensitive Information

- ❌ Real customer count/metrics
- ❌ Real revenue/financial data
- ❌ Real product roadmap details
- ❌ Real competitive analysis
- ❌ Real contract terms
- ✅ Anonymized examples: "~1000 users", "$50K MRR", "generic roadmap"

### Logs with Secrets

```typescript
// ❌ WRONG - LOG CONTAINS SENSITIVE DATA (PATTERN)
[ERROR] Request failed
Headers: Authorization: Bearer [JWT_token_format]...
Body: {"apiKey": "[API_KEY_FORMAT]", "userId": "user_12345"}

// ✅ CORRECT - REDACT SENSITIVE VALUES
[ERROR] Request failed
Headers: Authorization: Bearer [REDACTED]
Body: {"apiKey": "[REDACTED]", "userId": "[REDACTED]"}
```

## Safe Practices

### ✅ DO These Things

1. **Use Environment Variables**
   ```typescript
   // Load from .env, never hardcode
   const apiKey = process.env.YSHI_API_KEY;
   ```

2. **Use Placeholders Consistently**
   ```typescript
   const example = {
     apiKey: 'YOUR_API_KEY_HERE',
     webhook: 'https://your-domain.com/webhook',
     secret: 'YOUR_SECRET_HERE',
   };
   ```

3. **Add Comments to LLMs**
   ```typescript
   // When asking LLM for help:
   // "Here's my config structure (with secrets redacted). How can I optimize this?"
   const config = {
     apiKey: '[REDACTED]',
     dbUrl: 'postgresql://user:pass@host/db',
     webhookSecret: '[REDACTED]',
   };
   ```

4. **Reference Documentation**
   ```
   "Based on Yshi API docs at docs.yshi.co, how do I authenticate?"
   This is safer than pasting your actual implementation.
   ```

5. **Use Public Code Examples**
   ```
   "I'm following this pattern from the Yshi documentation. 
    How can I improve the error handling?"
   Link to the public documentation rather than your code.
   ```

6. **Ask Conceptual Questions**
   ```
   "How should I structure webhook authentication?"
   vs
   "Here's my webhook handler with my secret key, please review"
   ```

7. **Use Generic Errors**
   ```typescript
   // ✅ Safe for LLM discussion
   logger.error('Failed to authenticate with external API');
   
   // ❌ Never share
   logger.error('Failed with API authentication error [redacted]');
   ```

### ❌ AVOID These Things

1. **Copy-pasting entire .env files**
   - Even if "not production", it's bad habit
   - Always redact

2. **Sharing production logs verbatim**
   - First sanitize for PII and secrets

3. **Showing real database dumps**
   - Always use anonymized/fake data

4. **Pasting configuration files directly**
   - Always remove secrets first

5. **Assuming the LLM is "secure"**
   - None of them guarantee data won't be used for training
   - Assume every input could be public

6. **Sharing without context**
   ```
   ❌ "Here's code: apiKey='[secret_pattern]'"
   ✅ "Here's my (redacted) code structure"
   ```

7. **Trusting chat history is private**
   - Assume conversations could be logged
   - Act accordingly

## LLM-Specific Guidance

### Claude (Anthropic)

**✅ Strengths:**
- Excellent for detailed explanations
- Good at security-aware suggestions
- Can handle complex code architecture

**⚠️ Remember:**
- Use Claude to review your security practices
- Ask Claude to help you write guardrails
- Do NOT paste actual secrets as test cases

**Example Safe Usage:**
```
"I'm building a webhook handler for Yshi. 
Here's my (redacted) code structure. 
What are the security best practices I should follow?"
```

### ChatGPT / GPT-4

**✅ Strengths:**
- Great for code generation
- Good at pattern recognition
- Excellent documentation help

**⚠️ Remember:**
- OpenAI may use conversations for training
- Avoid any PII or secrets
- Use anonymized examples

**Example Safe Usage:**
```
"How should I structure error handling for webhook validation 
according to Yshi API standards?"
```

### GitHub Copilot

**✅ Strengths:**
- Integrated into your editor
- Understands your codebase
- No conversation history exposure

**⚠️ Remember:**
- Copilot sees your actual code
- Make sure `.env` files are in `.gitignore`
- Redact secrets in comments if showing code

**Example Safe Usage:**
```typescript
// Copilot seeing this is fine:
// const webhook = verifyYshiWebhook(event, process.env.YSHI_WEBHOOK_SECRET);
// (Copilot doesn't see the actual env value)
```

### Other LLMs (Gemini, Llama, Mistral)

**⚠️ Remember:**
- Data retention policies vary
- Some may train on conversations
- European LLMs may have stricter regulations

**Example Safe Usage:**
```
"Based on Yshi's webhook documentation, 
how would you validate webhook signatures?"
```

## Examples: Good vs Bad

### Example 1: Asking About Authentication

```
❌ BAD:
"Why is this failing? Here's my setup:
const token = '[JWT_token_would_appear_here]';
const userId = 'user_abc123';
const apiKey = '[API_key_would_appear_here]';"

✅ GOOD:
"Why might webhook authentication fail? 
According to Yshi API docs, what are the common issues 
with JWT validation and API key verification?"
```

### Example 2: Debugging Configuration

```
❌ BAD:
"My Yshi integration isn't working. Here's my .env file:
YSHI_API_KEY=[actual_key_would_be_here]
WEBHOOK_URL=https://internal-staging.acme.com/webhook
DATABASE_URL=postgres://admin:password@db:5432/prod
STRIPE_KEY=[stripe_key_would_be_here]"

✅ GOOD:
"My Yshi integration isn't working. 
I'm using environment variables for all credentials.
The webhook endpoint is responding with 401.
What could cause authentication failures?"
```

### Example 3: Code Review Request

```
❌ BAD:
"Please review my webhook handler:
exports.handler = async (event) => {
  const key = process.env.WEBHOOK_SECRET;
  const signature = event.headers['x-yshi-signature'];
  // ... actual implementation details with traces showing actual token
}"

✅ GOOD:
"Please review my webhook handler approach:
- I'm loading the secret from environment
- I'm validating the signature from headers
- I'm parsing the event payload safely
Are there security gaps in this pattern?"
```

### Example 4: Error Debugging

```
❌ BAD:
"Getting this error in production:
[ERROR] User 'john.smith@acme.com' (ID: user_12345) 
failed to authenticate with Yshi.
API returned: 403 with token eyJhbGc..."

✅ GOOD:
"Getting a 403 error from Yshi authentication.
What could cause API authentication failures? 
(Using environment variables for credentials)"
```

### Example 5: Documentation Question

```
❌ BAD:
"How do I use Mini Apps? 
Here's what we're building:
- Internal dashboard at https://internal.acme.com
- Showing customer data: [pasted real customer list]
- Using our auth system at https://auth.acme.local"

✅ GOOD:
"How do I use Mini Apps according to Yshi docs?
I'm building a dashboard that displays business metrics.
What's the recommended authentication pattern?"
```

## Checklist

### Before Asking an LLM for Help

- [ ] I have reviewed my code for hardcoded secrets
- [ ] All API keys are replaced with placeholders
- [ ] No real email addresses or PII is included
- [ ] No real customer/user data is included
- [ ] No internal URLs or infrastructure details are exposed
- [ ] No real payment information is included
- [ ] No real database connection strings with passwords
- [ ] No real webhook secrets or tokens
- [ ] I am not sharing environment variable values
- [ ] I am asking about patterns, not specific implementations
- [ ] I am using public documentation references where possible
- [ ] I have treated the LLM interaction as potentially public
- [ ] I would be comfortable if this was published publicly

### If You Did Share Something Sensitive

1. ❌ Don't think "it's fine, I'll just delete it"
2. ✅ Immediately revoke the exposed credential:
   - Rotate the API key
   - Change the password
   - Revoke the token
   - Update the webhook secret
3. ✅ Audit for unauthorized access
4. ✅ Document the incident
5. ✅ Update your `.gitignore` to prevent repeat
6. ✅ Add pre-commit hooks to catch secrets
7. ✅ Consider using a secret scanning tool

## Incident Response

### If You Accidentally Shared a Secret

**Immediate Actions (First 5 minutes):**
1. ❌ STOP - don't continue the conversation
2. ✅ Identify exactly what was exposed
3. ✅ Start rotating credentials immediately
4. ✅ Notify your security team

**Short-term Actions (Next hour):**
1. ✅ Complete credential rotation
2. ✅ Check for unauthorized access logs
3. ✅ Force re-authentication for all users
4. ✅ Update any dependent services

**Long-term Actions (This week):**
1. ✅ Implement automated secret detection
2. ✅ Add to incident report
3. ✅ Update team guardrails
4. ✅ Implement pre-commit hooks
5. ✅ Add secret scanning to CI/CD

### Tools to Prevent Secret Sharing

**Git Pre-commit Hooks:**
```bash
# Install git-secrets
brew install git-secrets

# Configure for AWS secrets
git secrets --register-aws --global
git secrets --install ~/.git-templates/hooks
git config --global init.templateDir ~/.git-templates
```

**Local Scanning (Python):**
```bash
pip install detect-secrets
detect-secrets scan --baseline .secrets.baseline
```

**Environment Setup:**
```bash
# Always use .env files with .gitignore
echo ".env.local" >> .gitignore
echo ".env.*.local" >> .gitignore
```

**IDE Extensions:**
- VS Code: `truffleHog.trufflehog` - scans for secrets
- VS Code: `GitGuardian.ggshield-vscode` - real-time secret detection
- IntelliJ: `Secret Detection by Jetbrains` - built-in scanning

### Trusted LLM Practices

1. **Use Private Instances When Possible**
   - Some enterprise LLM deployments don't train on data
   - Ask your provider about data retention

2. **Cleanse Before Pasting**
   ```typescript
   // ALWAYS do this first:
   // Find all secrets: grep -r "sk_live\|ghp_\|AKIA" .
   // Replace with placeholders before pasting anywhere
   ```

3. **Mark Sensitive Conversation**
   ```
   "I'm asking about security patterns (no sensitive data included)"
   This sets proper context with the LLM
   ```

4. **Document for Your Team**
   - Link to this guide in pull requests
   - Reference in code reviews
   - Share in onboarding

## Summary

**The Golden Rule:**
> If you wouldn't want it published on Twitter, don't paste it into an LLM.

**The Core Principles:**
1. 🔐 Secrets are sacred - never share them
2. 🙅 PII is off-limits - always anonymize
3. 🎯 Be specific but generic - focus on patterns
4. 🔄 Rotate everything exposed - even by accident
5. 🛡️ Assume no privacy - treat LLM input as public
6. 📝 Document your practices - share this guide
7. 🚀 Build secure by default - make it easy to do right

---

**Last Updated:** 2026-07-02  
**Questions?** See the FAQ at bottom of this guide  

## FAQ

**Q: Is Claude definitely secure?**  
A: Anthropic has privacy policies, but assume all LLM conversations could be logged. Treat all of them the same way.

**Q: What if I only paste a snippet?**  
A: If the snippet contains a secret, that's still exposure. Be strict about this.

**Q: Can I ask LLMs to help me create fake API keys?**  
A: Yes! This is actually encouraged:
```
"Generate an example configuration with fake API keys and URLs for documentation"
```

**Q: What about open-source LLMs I run locally?**  
A: Still apply these practices. You don't know how the model was trained or if data is logged.

**Q: How do I know if I'm being too paranoid?**  
A: You're not. Security is about layers. Being cautious with LLMs is a good layer.
