/**
 * Category Index for AI & Language Models
 * Phase: 6
 * Total Integrations: 7
 * Folder Structure: /src/core/api/ai-language-models/
 */

import { Category } from '../../src/types/integration';

export const AI_LANGUAGE_MODELS: Category = {
  id: 'ai-language-models',
  name: 'AI & Language Models',
  emoji: '🤖',
  phaseNumber: 6,
  description: 'Artificial intelligence, LLMs, and machine learning',
  folder: '/src/core/api/ai-language-models/',
  integrationCount: 7,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: OpenAI, Anthropic, Google AI, Cohere, Hugging Face, Perplexity, Midjourney
 */

export default AI_LANGUAGE_MODELS;
