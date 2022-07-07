import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieDataSchema } from '../../components/MovieCard';

import MovieApi from '../../services/MovieApi';
import { APIKey } from '../../services/MovieApiKey';

export interface MovieSchema {
  Search: MovieDataSchema[],
  totalResults: string,
  Response: string,
  Error?: string,
};

export interface MovieSchema {
  Search: MovieDataSchema[],
  totalResults: string,
  Response: string,
  Error?: string,
};

export interface SelectedMovieSchema {
  Search: MovieDataSchema[],
  totalResults: string,
  Response: string,
  Error?: string,
};

export interface MoviesSchema {
  movies: {
    movies: MovieSchema,
    selectedMovie: any,
  }
};

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const initialTerm = 'Knight';
    try {
      const { data } = await MovieApi.get(`?apiKey=${APIKey}&s=${initialTerm}&type=movie`);
      return data;
    }
    catch (error) {
      console.log({ error });
    }
});

export const fetchAsyncMovieDetails = createAsyncThunk(
  'movies/fetchAsyncMovieDetails',
  async (id: string | undefined) => {
    try {
      const { data } = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
      return data;
    }
    catch (error) {
      console.log({ error });
    };
});

const initialState = {
  movies: {},
  selectedMovie: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeAsyncMovieDetails: (state) => {
      state.selectedMovie = {};
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending.toString()]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled.toString()]: (state, { payload }) => {
      console.log('Movies fetched successfully.');
      return { ...state, movies: payload}
    },
    [fetchAsyncMovies.rejected.toString()]: () => {
      console.log('Rejected.');
    },
    [fetchAsyncMovieDetails.fulfilled.toString()]: (state, { payload }) => {
      console.log('Movie details fetched successfully.');
      return { ...state, selectedMovie: payload}
    }
  }
});

export const { removeAsyncMovieDetails } = movieSlice.actions;
export const getAllMovies = (state: MoviesSchema) => state.movies.movies;
export const getSelectedMovie = (state: MoviesSchema) => state.movies.selectedMovie;

export default movieSlice.reducer;
