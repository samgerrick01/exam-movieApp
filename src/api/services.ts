const baseUrl = 'https://search.imdbot.workers.dev/';

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(`${baseUrl}?q=`);
    const data = await response.json();
    return data.description;
  } catch (error) {
    console.error('Error fetching data', error);
  }
};

export const searchMovies = async (query: string) => {
  try {
    const response = await fetch(`${baseUrl}?q=${query}`);
    const data = await response.json();
    return data.description;
  } catch (error) {
    console.error('Error fetching data', error);
  }
};

export const selectSingleMovie = async (id: string) => {
  try {
    const response = await fetch(`${baseUrl}?tt=${id}`);
    const data = await response.json();
    return data.short;
  } catch (error) {
    console.error('Error fetching data', error);
  }
};
