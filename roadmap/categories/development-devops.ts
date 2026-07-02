/**
 * Category Index for Development & DevOps
 * Phase: 1
 * Total Integrations: 10
 * Folder Structure: /src/core/api/development-devops/
 */

import { Category, Integration } from '../../src/types/integration';

// Import integrations (will be populated as each integration is created)
// import { GITHUB } from './github';
// import { GITLAB } from './gitlab';
// import { BITBUCKET } from './bitbucket';
// etc...

export const DEVELOPMENT_DEVOPS: Category = {
  id: 'development-devops',
  name: 'Development & DevOps',
  emoji: '🔧',
  phaseNumber: 1,
  description: 'Foundation integrations for developers and infrastructure teams',
  folder: '/src/core/api/development-devops/',
  integrationCount: 10,
  integrations: [
    // Integrations will be added here as they are created
  ],
  status: 'Planning' as const
};

/**
 * Integrations in this category:
 * 1. GitHub - Git repository and workflow automation
 * 2. GitLab - DevOps platform with CI/CD
 * 3. Bitbucket - Git repository hosting
 * 4. PagerDuty - Incident management
 * 5. Sentry - Error tracking and monitoring
 * 6. Uptime Kuma - Uptime monitoring
 * 7. Docker - Container orchestration
 * 8. Kubernetes - Container orchestration
 * 9. AWS - Cloud computing platform
 * 10. Heroku - Platform-as-a-Service
 */

export default DEVELOPMENT_DEVOPS;
