const baseUrl = 'https://search.imdbot.workers.dev/';
const defaultMovie = `${baseUrl}?q=`;
const singleMovie = `${baseUrl}?tt=`;

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
  return movieApiCall(defaultMovie);
};

export const searchMovies = (query: string) => {
  return movieApiCall(`${defaultMovie}${query}`);
};

export const selectSingleMovie = (id: string) => {
  return movieApiCall(`${singleMovie}${id}`);
};
