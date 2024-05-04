import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { MovieDataType, MovieType } from '@src/lib/types';

export interface MovieState {
  trendingMovies: MovieType[];
  singleMovie: MovieDataType | null;
  savedMovies: MovieType[];
  results: MovieType[];
}

const initialState: MovieState = {
  trendingMovies: [],
  singleMovie: null,
  savedMovies: [],
  results: [],
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
    setSavedMovies: (state, action: PayloadAction<MovieType>) => {
      state.savedMovies.push(action.payload);
    },
    removeSavedMovie: (state, action: PayloadAction<MovieType>) => {
      state.savedMovies = state.savedMovies.filter(
        (movie) => movie['#IMDB_ID'] !== action.payload['#IMDB_ID']
      );
    },
    clearSavedMovies: (state) => {
      state.savedMovies = [];
    },
    saveSaveMoviesfromLocalStorage: (
      state,
      action: PayloadAction<MovieType[]>
    ) => {
      state.savedMovies = action.payload;
    },
    setResults: (state, action: PayloadAction<MovieType[]>) => {
      state.results = action.payload;
    },
  },
});

export const {
  setTrendingMovies,
  setSingleMovie,
  setSavedMovies,
  removeSavedMovie,
  clearSavedMovies,
  saveSaveMoviesfromLocalStorage,
  setResults,
} = movieSlice.actions;

export default movieSlice.reducer;
