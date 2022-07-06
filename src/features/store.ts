import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import moviesReducer from './movies/movieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
