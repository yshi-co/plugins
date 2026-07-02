/**
 * Category Index for Weather & News
 * Phase: 19
 * Total Integrations: 4
 * Folder Structure: /src/core/api/weather-news/
 */

import { Category } from '../../src/types/integration';

export const WEATHER_NEWS: Category = {
  id: 'weather-news',
  name: 'Weather & News',
  emoji: '🌤️',
  phaseNumber: 19,
  description: 'Weather data and news aggregation services',
  folder: '/src/core/api/weather-news/',
  integrationCount: 4,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: OpenWeather, NewsAPI, RSS Feeds, News Agencies
 */

export default WEATHER_NEWS;
