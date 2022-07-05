import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieDataSchema } from '../../components/MovieCard';

import MovieApi from '../../services/MovieApi';
import { APIKey } from '../../services/MovieApiKey';

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

export const fetchAsyncMovies: any = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  try {
    const movieQuery = 'Knight';
    const { data } = await MovieApi.get(`?apiKey=${APIKey}&s=${movieQuery}&type=movie`);
    return data;
  }
  catch (error) {
    console.log({ error });
  };
});
console.log(fetchAsyncMovies)
const initialState = {
  movies: {}
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched successfully.');
      return { ...state, movies: payload}
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected.');
    },
  }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: moviesSchema) => state.movies.movies;

export default movieSlice.reducer;
