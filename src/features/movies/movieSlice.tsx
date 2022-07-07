import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieDataSchema } from '../../components/MovieCard';

import MovieApi from '../../services/MovieApi';
import { APIKey } from '../../services/MovieApiKey';

export interface MovieItemSchema {
    id: string;
    image: string;
    title: string;
    year: number;
    rank: number;
}

export interface PopMoviesSchema {
  errorMessage: string | '';
  items: MovieItemSchema[];
}

export interface SelectedMovieSchema {
  id: string;
  image: string;
  title: string;
  contentRating: string;
  year: string;
  genres: string;
  runtimeStr: string;
  directors: string;
  writers: string;
  plot: string;
  imDbRating: string;
  languages: string;
};

export interface MoviesSchema {
  movies: {
    movies: PopMoviesSchema,
    selectedMovie: SelectedMovieSchema,
  }
};

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const initialTerm = 'Knight';
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
