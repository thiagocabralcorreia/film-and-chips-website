import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import MovieApi from '../../services/MovieApi';
import { APIKey } from '../../services/MovieApiKey';
import { MoviesSchema } from '../../types';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    try {
      const { data } = await MovieApi.get(`/MostPopularMovies/${APIKey}`);
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
      const { data } = await MovieApi.get(`/Title/${APIKey}/${id}/FullActor,Posters`);
      console.log({data})
      return data;
    }
    catch (error) {
      console.log({ error });
    };
});

export const fetchAsyncSearchedMovies = createAsyncThunk(
  'movies/fetchAsyncSearchedMovies',
  async (expression: string | undefined) => {
    try {
      const { data } = await MovieApi.get(`/SearchMovie/${APIKey}/${expression}`);
      return data;
    }
    catch (error) {
      console.log({ error });
    }
});

const initialState = {
  movies: {},
  selectedMovie: {},
  searchedMovies: {}
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeAsyncMovieDetails: (state) => {
      state.selectedMovie = {};
    },
    removeAsyncSearchedMovies: (state) => {
      state.searchedMovies = {};
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
    },
    [fetchAsyncSearchedMovies.pending.toString()]: () => {
      console.log('Pending');
    },
    [fetchAsyncSearchedMovies.fulfilled.toString()]: (state, { payload }) => {
      console.log('Searched movies fetched successfully.');
      return { ...state, searchedMovies: payload}
    },
    [fetchAsyncSearchedMovies.rejected.toString()]: () => {
      console.log('Rejected.');
    },
  }
});

export const { removeAsyncMovieDetails, removeAsyncSearchedMovies } = movieSlice.actions;
export const getAllMovies = (state: MoviesSchema) => state.movies.movies;
export const getSelectedMovie = (state: MoviesSchema) => state.movies.selectedMovie;
export const getAllSearchedMovies = (state: MoviesSchema) => state.movies.searchedMovies;

export default movieSlice.reducer;
