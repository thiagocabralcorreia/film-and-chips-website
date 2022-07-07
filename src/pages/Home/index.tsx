import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { SearchBar } from '../../components/SearchBar';
import { MoviesList } from '../../components/MoviesList';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
import { AppDispatch } from '../../features/store';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const initialTerm = 'Knight';

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  },[dispatch]);

  return (
    <div style={{ minHeight: '80vh' }}>
      <SearchBar/>
      <MoviesList />
    </div>
  )
}

export default Home;
