import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
import { AppDispatch } from '../../features/store';
import { ThemeToggle, ThemeToggleProps } from '../ThemeToggle';

import { TopBar, LinkTitle } from './styles';

export const Header = ({ toggleTheme }: ThemeToggleProps) => {
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
      <ThemeToggle toggleTheme={toggleTheme} />
    </TopBar>
  );
};
