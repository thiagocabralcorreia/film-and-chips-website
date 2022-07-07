import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../features/store';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

import {
  SearchBarContainer,
  SearchBarWrapper,
  SearchBarForm,
  SearchBarInput,
  InputIcon,
  SearchButton
} from './styles';

export const SearchBar = () => {
  const [term, setTerm] = useState('Knight');

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <SearchBarForm>
          <SearchButton type='submit'>
            <InputIcon className='fa fa-search'></InputIcon>
          </SearchButton>
          <SearchBarInput
            type='text'
            placeholder='Search for a movie...'
            onChange={(e) => setTerm(e.target.value)}
          />
        </SearchBarForm>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};
