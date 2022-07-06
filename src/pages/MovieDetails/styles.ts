import styled from 'styled-components';
import { txt } from '../../styles/themes/typography';

export const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 50px;
  color:  ${props => props.theme.colors.title};
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 50px;
`;

export const MovieRating = styled.div`
  margin-top: 20px;
  color:  ${props => props.theme.colors.title};
  display: flex;

  & > span {
    margin-right: 20px;
  }
`;

export const MovieTitle = styled.h3`
  width: 100%;
	font-size: ${txt.size.h1};
	font-weight: ${txt.weight.bold};
	color: ${props => props.theme.colors.title};

	& > span {
		color: ${props => props.theme.colors.text};
	}
`;

export const MoviePlot = styled.div`
  margin: 20px 0 10px;
  line-height: 1.8rem;
`;

export const MovieInfo = styled.p`
  & > span:first-child {
    padding: 5px 0px;
    color: ${props => props.theme.colors.title};
    font-weight: ${txt.weight.bold};
    width: 100px;
    display: inline-block;
  }

  & > span {
    color: ${props => props.theme.colors.text};
  }
`;

export const Icon = styled.i`
  color: ${props => props.theme.colors.primary};
  margin-right: 6px;
`;
