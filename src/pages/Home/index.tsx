import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MoviesList } from '../../components/MoviesList';
import { addMovies } from '../../features/movies/movieSlice';
import MovieApi from '../../services/MovieApi';
import { APIKey } from '../../services/MovieApiKey';

const Home = () => {
  const dispatch = useDispatch();
  const movieQuery = 'Knight';
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await MovieApi.get(`?apiKey=${APIKey}&s=${movieQuery}&type=movie`);
        dispatch(addMovies(data));
      }
      catch (error) {
        console.log({ error })
      }
    };
      fetchMovies();
  },[]);

  return (
    <div style={{ minHeight: '80vh' }}>
      <MoviesList/>
    </div>
  )
}

export default Home;
