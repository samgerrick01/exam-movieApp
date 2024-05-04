import { useQuery } from '@tanstack/react-query';
import { fetchTrendingMovies, selectSingleMovie } from './services';
import { MovieDataType, MovieType } from '@src/lib/types';

export const useTrendingMovieList = () => {
  return useQuery({
    queryKey: ['trending-movies'],
    queryFn: async () => {
      const data = await fetchTrendingMovies();
      return data as MovieType[];
    },
  });
};

export const useSelectSingleMovie = (id: string) => {
  return useQuery({
    queryKey: ['single-movie'],
    queryFn: async () => {
      const data = await selectSingleMovie(id);
      if (data === null || data === undefined) return null;
      return data as MovieDataType;
    },
  });
};
