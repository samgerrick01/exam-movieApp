import { useQuery } from '@tanstack/react-query';
import { fetchTrendingMovies } from './services';
import { MovieType } from '@src/lib/types';

export const useTrendingMovieList = () => {
  return useQuery({
    queryKey: ['trending-movies'],
    queryFn: async () => {
      const data = await fetchTrendingMovies();
      return data as MovieType[];
    },
  });
};
