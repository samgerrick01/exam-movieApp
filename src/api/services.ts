import { MovieType } from '@src/lib/types';

const baseUrl = 'https://search.imdbot.workers.dev/';
const trendingApi = `${baseUrl}?q=`;

async function movieApiCall(endpoints: string) {
  try {
    const response = await fetch(endpoints);
    const data = await response.json();
    return data.description;
  } catch (error) {
    console.error('Error fetching data', error);
  }
}

export const fetchTrendingMovies = () => {
  return movieApiCall(trendingApi);
};
