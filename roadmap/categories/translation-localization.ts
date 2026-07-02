/**
 * Category Index for Translation & Localization
 * Phase: 18
 * Total Integrations: 4
 * Folder Structure: /src/core/api/translation-localization/
 */

import { Category } from '../../src/types/integration';

export const TRANSLATION_LOCALIZATION: Category = {
  id: 'translation-localization',
  name: 'Translation & Localization',
  emoji: '🌍',
  phaseNumber: 18,
  description: 'Translation services and localization platforms',
  folder: '/src/core/api/translation-localization/',
  integrationCount: 4,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Google Translate, DeepL, Microsoft Translator, Lokalise
 */

export default TRANSLATION_LOCALIZATION;
