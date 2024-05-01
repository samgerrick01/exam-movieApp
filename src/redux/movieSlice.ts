import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MovieType } from '@src/lib/types';

export interface MovieState {
  trendingMovies: MovieType[];
}

const initialState: MovieState = {
  trendingMovies: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setTrendingMovies: (state, action: PayloadAction<MovieType[]>) => {
      state.trendingMovies = action.payload;
    },
  },
});

export const { setTrendingMovies } = movieSlice.actions;

export default movieSlice.reducer;
