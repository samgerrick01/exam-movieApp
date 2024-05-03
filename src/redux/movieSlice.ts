import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MovieDataType, MovieType } from '@src/lib/types';

export interface MovieState {
  trendingMovies: MovieType[];
  singleMovie: MovieDataType | null;
}

const initialState: MovieState = {
  trendingMovies: [],
  singleMovie: null,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setTrendingMovies: (state, action: PayloadAction<MovieType[]>) => {
      state.trendingMovies = action.payload;
    },
    setSingleMovie: (state, action: PayloadAction<MovieDataType | null>) => {
      state.singleMovie = action.payload;
    },
  },
});

export const { setTrendingMovies, setSingleMovie } = movieSlice.actions;

export default movieSlice.reducer;
