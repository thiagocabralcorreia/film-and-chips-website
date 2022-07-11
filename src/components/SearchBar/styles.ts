import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchBarContainer = styled.div`
  display: block;
  height: 63px;
  width: 100%;
  padding: 15px 50px;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 100%;
  border-radius: 7px;
  background-color: ${props => props.theme.colors.white};
`;

export const SearchBarForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SearchBarInput = styled.input`
  display: flex;
  justify-content: center;
  padding: 5px 5px 7px;
  height: 30px;
  width: 100%;
  border: none;
  background-color: transparent;

    &:focus {
      border: none;
      outline: none;
      background-color: transparent;
    }
`;

export const InputIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.gray500};
`;

export const SearchButton = styled.button`
  padding: 0px 10px 0px 15px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
