import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import { MovieCard } from '../MovieCard';

import { ListContainer, ListTitle, ListMovies } from './styles';

export const MoviesList = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = undefined;

  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className='movies-error'>
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <ListContainer>
        <ListTitle>MOVIES</ListTitle>
        <ListMovies>{renderMovies}</ListMovies>
    </ListContainer>
  )
};
