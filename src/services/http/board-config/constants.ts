import { CONFIG_API_RESPONSE } from './types';

export const BASE_URL = 'https://demo7919674.mockable.io/';

export const DEFAULT_RESPONSE: CONFIG_API_RESPONSE = {
  data: [],
  success: true,
  // isDataLoaded: true || false => in order to not store this value inside App.tsx
};
