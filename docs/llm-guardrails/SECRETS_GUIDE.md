# 🔐 Secrets Management Guide

**Definitive guide on what constitutes a secret and why you should never share it with LLMs.**

## Table of Contents

- [What is a Secret?](#what-is-a-secret)
- [Types of Secrets](#types-of-secrets)
- [Why Secrets Matter](#why-secrets-matter)
- [Detecting Secrets](#detecting-secrets)
- [Storing Secrets](#storing-secrets)
- [Rotating Secrets](#rotating-secrets)

## What is a Secret?

A **secret** is any credential, token, or key that grants access to systems, data, or services.

**Key Principle:**
> If someone else obtained it, they could impersonate you or access your resources.

## Types of Secrets

### API Keys & Tokens

```
// ❌ NEVER SHARE (EXAMPLES - NOT REAL)
// These are examples of SECRET PATTERNS to AVOID
// STRIPE_SECRET_KEY=process.env.STRIPE_SECRET_KEY
// DATABASE_URL=process.env.DATABASE_URL
// GITHUB_TOKEN=process.env.GITHUB_TOKEN
// AWS_SECRET_ACCESS_KEY=process.env.AWS_SECRET_ACCESS_KEY

// ✅ USE ENVIRONMENT VARIABLES INSTEAD
STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
DATABASE_URL=${DATABASE_URL}
GITHUB_TOKEN=${GITHUB_TOKEN}
AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
```

### Database Credentials

```bash
# ❌ NEVER SHARE (EXAMPLE PATTERNS)
# These show WHAT NOT TO DO
# Actual values would be:
# STRIPE_SECRET_KEY=[would_be_api_key]
# YSHI_API_KEY=[would_be_api_key]
# DATABASE_URL=postgres://user:password@host/db

# ✅ CORRECT - USE ENVIRONMENT VARIABLES
export STRIPE_SECRET_KEY=$(getenv STRIPE_SECRET_KEY)
export YSHI_API_KEY=$(getenv YSHI_API_KEY)
export DATABASE_URL=$(getenv DATABASE_URL)
```

### OAuth Tokens & Refresh Tokens

```typescript
// ❌ NEVER SHARE
OAUTH_ACCESS_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM...
REFRESH_TOKEN=1//0gW-P5LE8_L8AiZVuqW3lhKH3M9C0VhEf2hHUFPvmSGjrNWHC...
SESSION_TOKEN=sess_abc123def456ghi789jkl012mnopqrs
```

### Private Keys & Certificates

```typescript
// ❌ NEVER SHARE
PRIVATE_KEY=-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1234567890abcdefghijklmnopqrstuvwxyz
...
-----END RSA PRIVATE KEY-----

SSL_CERT_PRIVATE=-----BEGIN CERTIFICATE-----
MIIDXTCCAkWgAwIBAgIJAKc...
```

### Webhook Secrets

```typescript
// ❌ NEVER SHARE
WEBHOOK_SECRET=whsec_1234567890abcdefghijklmnopqr
GITHUB_WEBHOOK_SECRET=super-secret-webhook-key
STRIPE_WEBHOOK_SECRET=whsec_test_1234567890abcdefg
YSHI_WEBHOOK_SECRET=ws_1234567890abcdefghijklmnopqr
```

### Encryption Keys & Passwords

```typescript
// ❌ NEVER SHARE
ENCRYPTION_KEY=0123456789abcdef0123456789abcdef
PASSWORD=MySecurePassword123!@#
ADMIN_PASSWORD=admin_pass_for_staging
DATABASE_PASSWORD=db_password_production
```

### AWS / Cloud Provider Credentials

```typescript
// ❌ NEVER SHARE
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
GCP_SERVICE_ACCOUNT_KEY={"type": "service_account", "project_id": ...}
AZURE_STORAGE_ACCOUNT_NAME=myaccount
AZURE_STORAGE_ACCOUNT_KEY=DefaultEndpointsProtocol=https;...
```

### Internal URLs & Hostnames

```typescript
// ⚠️ RISKY - CAN EXPOSE INFRASTRUCTURE
INTERNAL_API=https://api-internal.acme.local
MONITORING_URL=https://grafana.monitoring.internal
DB_HOST=postgres-prod-01.db.internal
REDIS_HOST=cache-redis-01.internal.acme.com
```

### Sensitive Business Data

```typescript
// ❌ NEVER SHARE
// Real customer list
// Real financial data
// Real revenue numbers
// Real user counts
// Real API usage metrics
// Real infrastructure costs
// Real performance metrics showing vulnerabilities
```

## Why Secrets Matter

### The Domino Effect

```
Someone obtains your API key
    ↓
They make API requests as you
    ↓
They access your data
    ↓
They modify your configuration
    ↓
They access user data
    ↓
Data breach, compliance violation
    ↓
Millions in fines + reputation damage
```

### Real-World Examples

**GitHub Security Incident:**
```
Developer commits token by mistake
GitHub scans commits, finds token
GitHub disables token, notifies user
Attacker had 2 hours of access
Could have accessed private repos
```

**AWS Account Compromise:**
```
API key leaked on public repository
Attacker spins up GPU instances
$20,000 charges in 24 hours
User discovers during credit card fraud check
```

**Database Breach:**
```
Database password in environment file
Git history exposed via .git folder access
Attacker gains full database access
Customer data breach affects thousands
Company liable for GDPR fines
```

## Detecting Secrets

### Patterns to Look For

**API Keys** (Usually Start With Specific Prefixes):
```
sk_live_* (Stripe)
sk_test_* (Stripe Test)
pk_live_* (Stripe Public)
ghp_* (GitHub Personal)
ghu_* (GitHub User)
gho_* (GitHub OAuth)
gl-* (GitLab)
yst_* (Yshi)
sk-proj-* (OpenAI)
```

**Bearer Tokens** (JWT Format):
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0...
eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyMzQ1In0.eyJpc3M...
```

**AWS Credentials**:
```
AKIA* (AWS Access Key)
ASIA* (AWS Temporary Key)
aws_access_key_id=
aws_secret_access_key=
```

**Database Connections**:
```
postgres://username:password@host
mongodb+srv://user:pass@
mysql://root:password@localhost
```

### Automated Detection

**Use git-secrets:**
```bash
# Install
brew install git-secrets

# Setup patterns
git secrets --register-aws --global
git secrets --add-provider -- cat /path/to/custom-patterns

# Run
git secrets --scan
```

**Use detect-secrets:**
```bash
pip install detect-secrets
detect-secrets scan > .secrets.baseline
detect-secrets audit .secrets.baseline
```

**Use TruffleHog:**
```bash
trufflehog filesystem . --json
trufflehog github --repo https://github.com/your/repo
```

## Storing Secrets

### ✅ DO Store in Environment Variables

```typescript
// ✅ CORRECT
const apiKey = process.env.YSHI_API_KEY;
const dbUrl = process.env.DATABASE_URL;
const webhookSecret = process.env.WEBHOOK_SECRET;

// Access during runtime, not visible in code
```

### ✅ DO Use .env Files Locally (Never Commit)

```bash
# .env (NEVER commit this)
YSHI_API_KEY=${YSHI_API_KEY}
DATABASE_URL=${DATABASE_URL}

# .gitignore
.env
.env.local
.env.*.local
```

### ✅ DO Use Secrets Management Services

```typescript
// AWS Secrets Manager
import AWS from 'aws-sdk';
const client = new AWS.SecretsManager();
const secret = await client.getSecretValue({ SecretId: 'yshi-api-key' }).promise();

// HashiCorp Vault
import vault from 'node-vault';
const client = vault({ endpoint: 'https://vault.example.com' });
const secret = await client.read('secret/data/yshi-api-key');

// 1Password / LastPass
// Use their SDKs for programmatic access

// Environment variables in CI/CD
// GitHub Actions: Set secrets in repository settings
// GitLab CI: Set variables with "Masked" and "Protected" flags
// Jenkins: Use Jenkins Credentials plugin
```

### ✅ DO Rotate Secrets Regularly

```typescript
// Plan:
// Q1: Rotate all API keys
// Q2: Rotate all database passwords
// Q3: Rotate all OAuth tokens
// Q4: Rotate all webhook secrets

// Document the rotation:
// - When rotated
// - Who rotated it
// - Why it was rotated
// - Verification that everything still works
```

### ✅ DO Use Different Secrets Per Environment

```typescript
// ❌ NEVER SHARE (EXAMPLE)
// const YSHI_API_KEY = process.env.YSHI_API_KEY; // [actual_key_would_be_here]
// const PASSWORD = 'actual_db_password';
// const ADMIN_PASSWORD = 'actual_admin_pass';

// ✅ CORRECT - Different secrets per environment
// dev: test_key (test key, low risk)
// staging: staging_key (test key, can be reset)
// prod: production_key (live key, restricted access)
const YSHI_API_KEY = process.env.YSHI_API_KEY;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
```

## Rotating Secrets

### When to Rotate

1. **Immediately:**
   - Suspected exposure
   - Key leaked on internet
   - Employee with access leaves

2. **Regularly:**
   - Every 90 days minimum (compliance)
   - Every 30 days if possible (security best practice)

3. **Before Major Changes:**
   - Deployment to new environment
   - Integration with new service
   - Infrastructure migration

### How to Rotate

```typescript
// Step 1: Generate new secret
const newSecret = generateNewAPIKey();

// Step 2: Test new secret in non-prod
updateEnvironment('staging', 'YSHI_API_KEY', newSecret);
runTests('staging');

// Step 3: Update production
updateEnvironment('production', 'YSHI_API_KEY', newSecret);
verifyConnectivity('production');

// Step 4: Monitor for issues
monitorLogs('production', timeRange(Date.now(), 1.hour));

// Step 5: Revoke old secret
revokeAPIKey(oldSecret);

// Step 6: Document the rotation
logRotation({
  service: 'yshi',
  key: 'YSHI_API_KEY',
  rotatedAt: new Date(),
  rotatedBy: 'automation@example.com',
  reason: 'scheduled rotation',
});
```

### Making Secrets Vaultable

```typescript
// ❌ Hard to rotate - embedded in source
const getAPIKey = () => '[actual_key_would_be_here]';

// ✅ Easy to rotate - from environment
const getAPIKey = () => process.env.YSHI_API_KEY;

// ✅ Even better - with fallback
const getAPIKey = () => {
  const key = process.env.YSHI_API_KEY;
  if (!key) throw new Error('Missing YSHI_API_KEY environment variable');
  return key;
};
```

## Secret Scanning in CI/CD

### GitHub Actions Example

```yaml
name: Secret Detection
on: [push, pull_request]

jobs:
  secret-scanning:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: TruffleHog scan
        uses: trufflesecurity/trufflehog@main
        with:
          path: ./
          base: ${{ github.event.repository.default_branch }}
          head: HEAD
          
      - name: Detect Secrets
        run: |
          pip install detect-secrets
          detect-secrets scan --baseline .secrets.baseline
          detect-secrets audit .secrets.baseline
```

### Pre-commit Hook Example

```bash
#!/bin/bash
# .git/hooks/pre-commit

# Check for common secret patterns
if git diff --cached | grep -E "(sk_live_|ghp_|AKIA|password\s*=)" ; then
    echo "❌ Possible secret detected in staged files!"
    echo "Remove secrets and try again"
    exit 1
fi

# Run TruffleHog on staged files
trufflehog filesystem . --staged

exit $?
```

---

**Remember:** Secrets are the keys to your kingdom. Guard them fiercely.
