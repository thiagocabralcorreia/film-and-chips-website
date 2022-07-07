import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
import { AppDispatch } from '../../features/store';

import { TopBar, LinkTitle } from './styles';

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const initialTerm = 'Knight';

  const handleClick = () => {
    dispatch(fetchAsyncMovies());
  }
 
  return (
    <TopBar>
      <LinkTitle to={'/'} onClick={handleClick}>
          F<span>I</span>LM & CH<span>I</span>PS
      </LinkTitle>
    </TopBar>
  );
};
