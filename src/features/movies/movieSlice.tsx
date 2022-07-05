import { createSlice } from '@reduxjs/toolkit';
import { MovieDataSchema } from '../../components/MovieCard';

export interface movieSchema {
  Search: MovieDataSchema[],
  totalResults: string,
  Response: string,
  Error?: string,
}

export interface moviesSchema {
  movies: {
    movies: movieSchema;
  }
}

const initialState = {
  movies: {}
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: moviesSchema) => state.movies.movies;

export default movieSlice.reducer;
