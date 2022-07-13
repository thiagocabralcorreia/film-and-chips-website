import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MoviesList} from '../../components/MoviesList';
import { AppDispatch } from '../../features/store';
import { Loading } from '../../components/Loading';

import {
  fetchAsyncSearchedMovies,
  getAllSearchedMovies,
  removeAsyncMovieDetails,
  isLoading
} from '../../features/movies/movieSlice';

import { ErrorContainer, Error } from '../../styles/global';
import { MovieCard } from '../../components/MovieCard';
import { MovieItemSchema } from '../../types';

const SearchResults = () => {
  const { expression } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector(getAllSearchedMovies);
  const loading = useSelector(isLoading);
  let renderMovies = undefined;
 
  useEffect(() => {
    dispatch(fetchAsyncSearchedMovies(expression));
    return () => {
      dispatch(removeAsyncMovieDetails());
    }
  }, [dispatch, expression]);

  renderMovies = movies?.results?.map((movie: MovieItemSchema) => (
    <MovieCard key={movie.id} data={movie} />
  ));
  
  return (
    <div style={{ minHeight: '80vh' }}>
      {movies.errorMessage ? (
        <ErrorContainer>
          <Error>Sorry! <span>{movies.errorMessage}</span></Error>
        </ErrorContainer>
      ) :
        Object.keys(movies).length === 0 && loading ? (
          <Loading />
        ) : (
          <MoviesList
            title={movies.results !== []
              ? `MAIN RESULTS FOR "${expression?.toUpperCase()}"`
              : `NO RESULTS FOR "${expression?.toUpperCase()}"`
            }
          >
            {renderMovies}
          </MoviesList>
        )}
    </div>
  )
};

export default SearchResults;
