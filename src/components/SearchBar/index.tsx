import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../features/store';
import { fetchAsyncSearchedMovies } from '../../features/movies/movieSlice';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  SearchBarContainer,
  SearchBarWrapper,
  SearchBarForm,
  SearchBarInput,
  InputIcon,
  SearchButton
} from './styles';

export const SearchBar = () => {
  const [term, setTerm] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleOnSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (term !== '') {
      dispatch(fetchAsyncSearchedMovies(term));
      console.log({ term })
      navigate(`/results/${term}`);
      setTerm('');
    }
  };

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <SearchBarForm onSubmit={handleOnSubmit}>
          <SearchButton type='submit'>
            <InputIcon icon={faSearch}></InputIcon>
          </SearchButton>
          <SearchBarInput
            type='text'
            value={term}
            placeholder='Search for a movie...'
            onChange={(e) => setTerm(e.target.value)}
            />
        </SearchBarForm>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};
