import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { movieType } from '@src/lib/types';

export interface MovieState {
  movies: movieType[];
}

const initialState: MovieState = {
  movies: [
    {
      '#TITLE': 'True Detective',
      '#YEAR': 2014,
      '#IMDB_ID': 'tt2356777',
      '#RANK': 55,
      '#ACTORS': 'Vince Vaughn, Colin Farrell',
      '#AKA': 'True Detective (2014) ',
      '#IMDB_URL': 'https://imdb.com/title/tt2356777',
      '#IMDB_IV':
        'https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt2356777&rhash=77ed0696a538f4',
      '#IMG_POSTER':
        'https://m.media-amazon.com/images/M/MV5BNTEzMzBiNGYtYThiZS00MzBjLTk5ZWItM2FmMzU3Y2RjYTVlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
      photo_width: 2025,
      photo_height: 3000,
    },
  ],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    increment: (state) => {
      //   state.value += 1;
    },
  },
});

export const { increment } = movieSlice.actions;

export default movieSlice.reducer;
