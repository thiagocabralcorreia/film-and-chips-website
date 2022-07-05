import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MoviesList } from '../../components/MoviesList';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  },[dispatch]);

  return (
    <div style={{ minHeight: '80vh' }}>
      <MoviesList/>
    </div>
  )
}

export default Home;
