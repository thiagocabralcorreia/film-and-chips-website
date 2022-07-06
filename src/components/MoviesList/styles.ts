import styled from 'styled-components';
import { txt } from '../../styles/themes/typography';

export const ListContainer = styled.div`
  margin: 20px 50px;
`;

export const ListMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;


export const ListTitle = styled.h3`
  font-size: ${txt.size.h1};
  color: ${props => props.theme.colors.title};
  margin-bottom: 20px;
  font-weight: ${txt.weight.bold};
`;

export const ListError = styled.h4`
  font-size: ${txt.size.h1};
  color: ${props => props.theme.colors.title};
  margin-bottom: 20px;
  font-weight: ${txt.weight.bold};
`;
