/**
 * Category Index for Maps & Location Services
 * Phase: 20
 * Total Integrations: 4
 * Folder Structure: /src/core/api/maps-location/
 */

import { Category } from '../../src/types/integration';

export const MAPS_LOCATION: Category = {
  id: 'maps-location',
  name: 'Maps & Location Services',
  emoji: '🗺️',
  phaseNumber: 20,
  description: 'Mapping platforms and location-based services',
  folder: '/src/core/api/maps-location/',
  integrationCount: 4,
  integrations: [],
  status: 'Planning' as const
};

/**
 * Integrations: Google Maps, Mapbox, HERE Maps, Foursquare
 */

export default MAPS_LOCATION;
