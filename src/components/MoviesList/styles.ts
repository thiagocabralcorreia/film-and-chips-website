import styled from 'styled-components';
import { txt } from '../../styles/themes/typography';

export const ListContainer = styled.div`
  margin: 20px 0px;
`;

export const ListMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;


export const ListTitle = styled.h4`
  font-size: ${txt.size.h1};
  color: color: ${props => props.theme.colors.title};
  margin: 0 20px 20px;
  font-weight: ${txt.weight.bold};
`;
