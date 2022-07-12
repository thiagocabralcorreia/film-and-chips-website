import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { fetchAsyncMovies, getAllMovies, isLoading } from '../../features/movies/movieSlice';
import { MovieCard } from '../../components/MovieCard';
import { MoviesList} from '../../components/MoviesList';
import { AppDispatch } from '../../features/store';
import { Loading } from '../../components/Loading';

import { MovieItemSchema } from '../../types';
import { ErrorContainer, Error } from '../../styles/global';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector(getAllMovies);
  const loading = useSelector(isLoading);
  let renderMovies = undefined;

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  renderMovies = movies.errorMessage === '' ? (
    movies?.items?.map((movie: MovieItemSchema) => (
      <MovieCard key={movie.id} data={movie} />
    ))
  ) : (
    <div>
    </div>
  );

  return (
    <>
      {movies.errorMessage ? (
        <ErrorContainer>
          <Error>Sorry! <span>{movies.errorMessage}</span></Error>
        </ErrorContainer>
      ) : loading === true ? (
        <Loading />
      ) : (
        <MoviesList title='MOST POPULAR'>
          {renderMovies}
        </MoviesList>
      )}
    </>
  )
};

export default Home;
