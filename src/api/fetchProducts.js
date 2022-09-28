import axios from 'axios';

import { API_KEY, API_URL } from '@app/constants';

export const fetchProducts = async () => {
  try {
    const response = await axios.post(API_URL, '', {
      headers: {
        Authorization: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('Error:', error.message);
    return error.message;
  }
};
