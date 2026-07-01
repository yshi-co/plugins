# Yshi — Integration Roadmap

> All integrations are built on [Yshi API](https://docs.yshi.co/) primitives: **Bot Webhooks**, **Mini Apps**, **OIDC OAuth**, and the **Points System**.

---

## Phases

| Phase | Focus | Target |
|-------|-------|--------|
| 1 | Foundation & Developer Tools | Q3 2026 |
| 2 | CRM, Sales & Productivity | Q4 2026 |
| 3 | E-commerce & Payments | Q1 2027 |
| 4 | Content, Community & Support | Q2 2027 |
| 5 | Cloud Storage & Infrastructure | Q3 2027 |

---

## Phase 1 — Developer Tools & DevOps

### GitHub
- Post new PRs and issue comments into a developer group chat
- Allow admins to merge PRs using an inline callback button
- Sync GitHub Sponsors to Yshi exclusive channels

### GitLab
- Blast CI/CD pipeline success or failure alerts immediately
- Trigger manual deployment jobs via a `/deploy` command
- Assign issue reviewers

### PagerDuty
- Escalate severe on-call incidents directly to a Yshi group chat
- Acknowledge or resolve PagerDuty alerts using inline keyboards
- View incident post-mortems in a Mini App

### Sentry
- Summarize high-frequency error logs into a daily digest
- Assign error triaging to specific developers via chat
- Mute non-critical alerts temporarily

### Uptime Kuma
- Send instant "Server Down" / "Server Up" pings
- Provide a Mini App dashboard of current service health
- Check specific endpoint latency via commands

---

## Phase 2 — CRM, Sales & Productivity

### Salesforce
- Pull lead history into a Mini App UI before a sales call
- Log Yshi bot conversation transcripts to a Salesforce Contact record
- Update opportunity stages via a `/stage` command

### HubSpot
- Intake new leads via a conversational bot flow and push structured data to HubSpot
- Trigger email campaign follow-ups based on Yshi Mini App usage
- Send lead scoring alerts to sales reps

### Pipedrive
- Get daily morning briefings on deals closing today
- Add quick meeting notes to a deal via bot text inputs
- Celebrate "Won" deals with automated group chat announcements

### Zoho CRM
- Generate new support tickets from chat messages
- Send invoice payment reminders
- Schedule customer follow-up tasks directly from a Mini App

### Odoo
- Query ERP inventory levels securely via chat (`/stock SKU-123`)
- Approve employee expense reports via inline buttons
- Sync employee directories to Yshi contacts

### Trello
- Create new cards by messaging the bot
- Move cards across lists using inline callback buttons
- Get tagged comment notifications in chat

### Jira
- Report bugs via chat (screenshot + description → Jira issue)
- Receive status transition notifications
- Assign tickets to developers via commands

### Notion
- Append quick thoughts or links to a Notion database via `/note`
- Fetch and display wiki pages inside a Mini App
- Get alerts when a shared page is updated

### Asana
- Receive daily task deadline reminders at 9 AM
- Mark tasks complete from within Yshi
- Create sub-tasks during team brainstorming in group chats

### ClickUp
- Start and stop time trackers via bot commands (`/start task_id`)
- View sprint burndown charts in a Mini App
- Reassign tasks via inline keyboards

---

## Phase 3 — E-commerce & Payments

### Shopify
- Build a fully headless storefront Mini App (WebApp SDK + Storefront API)
- Send instant out-of-stock alerts to warehouse teams
- Blast limited-time discount codes via inline keyboards to segmented users

### WooCommerce
- Detect abandoned carts and send a proactive bot DM with a recovery Mini App link
- Allow users to check order status using `/track [order_id]`
- Convert store loyalty rewards into Yshi Points

### Stripe
- Push failed payment alerts to billing administrators
- Generate secure Stripe Checkout links delivered via bot DMs
- Automatically grant premium Yshi Bot capabilities when a Stripe subscription is active

### PayPal
- Send digital receipt summaries to the buyer's Yshi chat
- Facilitate micro-donations to creators via Yshi Points that settle to PayPal
- Alert merchants of chargeback disputes instantly

### Magento
- Sync B2B wholesale price lists into a Yshi Datastore collection for sales rep lookup
- Automate RMA updates via chat
- Manage multi-store inventory sync alerts

---

## Phase 4 — Content, Community & Support

### WordPress
- Broadcast new articles via `sendMessage` to channel subscribers
- Route pending comments to an admin bot with "Approve" / "Spam" inline buttons
- Implement Yshi OIDC for 1-click passwordless logins

### Ghost
- Build a Mini App paywall where readers spend Yshi Points to unlock premium newsletters
- Sync subscriber tags with Bot member lists
- Send daily analytics summaries to the creator's 1:1 bot chat

### Webflow
- Capture landing page form submissions and push them as real-time bot alerts
- Launch a Webflow-hosted catalog inside a Yshi Mini App iframe
- Trigger onboarding welcome messages on user signup

### Wix
- Embed the Yshi live chat widget into Wix pages for customer support
- Sync store inventory alerts to a manager's Yshi bot
- Broadcast automated appointment reminders

### Contentful
- Send editorial approval requests to a Yshi group chat via webhooks
- Allow editors to query CMS asset links using slash commands (`/asset logo`)
- Notify translators when new locale fields are added

### Discord
- Build a two-way cross-platform message bridge using webhooks
- Sync Discord roles with Yshi VIP user statuses
- Mirror Discord server announcements to a Yshi public channel

### Slack
- Forward critical Slack `@mentions` to Yshi for remote workers
- Sync Slack status updates with Yshi user profiles
- Push Yshi Bot analytics reports into Slack marketing channels

### Discourse
- Deliver personalized weekly thread digests via bot
- Bridge direct messages between Discourse users and Yshi Bot conversations
- Allow users to upvote forum posts directly from Yshi using callback queries

### Reddit
- Monitor keywords and alert community managers of brand mentions in subreddits
- Fetch the top daily posts of a subreddit into a Mini App
- Verify Reddit account ownership via OAuth

### XenForo
- Auto-approve new forum registrations via a Yshi admin bot
- Mirror XenForo polls into Yshi chat using inline buttons
- Send Private Message notifications to Yshi

### Zendesk
- Allow customers to open, reply to, and close support tickets within a Yshi bot conversation
- Warn agents of SLA breaches in an internal group chat
- Send CSAT surveys via Mini App after ticket closure

### Intercom
- Route VIP customer chats to specialized human agents via Yshi
- Sync Help Center articles into the Yshi bot's AI Wiki knowledge base
- Push targeted outbound product updates

### Help Scout
- Triage the shared support mailbox using inline keyboards
- Forward voicemail transcripts to support groups
- Look up customer history securely via OAuth in a Mini App

### Front
- Route specific shared inbox rules to a Yshi finance bot
- Draft replies in Yshi that send via email
- Archive conversations remotely

### Crisp
- Sync live chat widget presence
- Send "agent typing" indicators across platforms
- Trigger fallback AI bot responses during off-hours

---

## Phase 5 — Cloud Storage & Infrastructure

### Google Drive
- Authenticate via OAuth to search and fetch Drive file links natively in chat
- Request access permissions for locked docs via bot
- Alert teams when a new file is added to a shared folder

### Dropbox
- Forward Yshi file attachments directly into a designated Dropbox folder
- Generate temporary share links
- Monitor storage quota limits

### Nextcloud
- Post secure, password-protected Nextcloud share links into chat
- Sync Nextcloud Deck Kanban updates to a project group
- Backup Yshi bot datastore records to Nextcloud

### Amazon S3
- Send daily backup success/failure logs to IT admins
- Generate presigned upload URLs via bot for large media file submissions
- Trigger Lambda functions based on chat commands

### OneDrive
- Search SharePoint corporate documents using Yshi LLM capabilities
- Share meeting recordings automatically
- Revoke file access upon employee offboarding

---

## API Primitives Coverage

| Primitive | Used By |
|-----------|---------|
| Bot Webhooks | GitHub, GitLab, PagerDuty, Uptime Kuma, Sentry, Stripe, Shopify, WooCommerce, Contentful, Discord, Slack, Zendesk, Front |
| Mini Apps | Ghost, Shopify, ClickUp, Zendesk, Help Scout, Google Drive, Uptime Kuma, Notion, Pipedrive, Asana |
| OIDC OAuth | WordPress, Reddit, Help Scout, Google Drive, Salesforce |
| Points System | Ghost, WooCommerce, PayPal |
