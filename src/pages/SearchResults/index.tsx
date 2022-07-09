import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchAsyncSearchedMovies, getAllSearchedMovies, removeAsyncMovieDetails } from '../../features/movies/movieSlice';
import { MoviesList} from '../../components/MoviesList';
import { AppDispatch } from '../../features/store';
import { LoadingContainer } from '../MovieDetails/styles';

import { ListError } from '../../components/MoviesList/styles';
import { MovieCard } from '../../components/MovieCard';
import { MovieItemSchema } from '../../types';

const SearchResults = () => {
  const { expression } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector(getAllSearchedMovies);
  let renderMovies = undefined;
 
  useEffect(() => {
    dispatch(fetchAsyncSearchedMovies(expression));
    return () => {
      dispatch(removeAsyncMovieDetails());
    }
  }, [dispatch, expression]);

  renderMovies = movies.errorMessage === '' ? (
    movies?.results?.map((movie: MovieItemSchema) => (
      <MovieCard key={movie.id} data={movie} />
    ))
  ) : movies.errorMessage ? (
    <div>
      <ListError>{movies.errorMessage}</ListError>
    </div>
  ) : (
    <div>
      <ListError>Loading...</ListError>
    </div>
  );

  return (
    <div style={{ minHeight: '80vh' }}>
      {Object.keys(movies).length === 0 ? (
        <LoadingContainer>
          <p>Loading...</p>
        </LoadingContainer>
      ) : (
        <MoviesList title={`RESULTS FOR "${expression?.toUpperCase()}"`}>
          {renderMovies}
        </MoviesList>
      )}
    </div>
  )
};

export default SearchResults;
