import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { fetchAsyncMovies, getAllMovies } from '../../features/movies/movieSlice';
import { MovieCard } from '../../components/MovieCard';
import { MoviesList} from '../../components/MoviesList';
import { AppDispatch } from '../../features/store';

import { ListError } from '../../components/MoviesList/styles';
import { MovieItemSchema } from '../../types';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector(getAllMovies);
  let renderMovies = undefined;

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  renderMovies = movies.errorMessage === '' ? (
    movies?.items?.map((movie: MovieItemSchema) => (
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
      <MoviesList title='MOST POPULAR'>
        {renderMovies}
      </MoviesList>
    </div>
  )
}

export default Home;
