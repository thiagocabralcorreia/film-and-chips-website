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

export const MovieNumbers = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const MovieNumericalData = styled.p`
  color: ${props => props.theme.colors.title};
  display: flex;

  & > span {
    margin: 0 6px;
    font-weight: ${txt.weight.extrabold};
    color: ${props => props.theme.colors.primary};
  }
`;

export const MovieTitle = styled.h3`
  width: 100%;
	font-size: ${txt.size.h1};
	font-weight: ${txt.weight.bold};
	color: ${props => props.theme.colors.title};
`;

export const MoviePlot = styled.div`
  margin: 20px 0 10px;
  line-height: 1.8rem;
  color: ${props => props.theme.colors.text};
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

export const LoadingContainer = styled.div`
  height: 70vh;
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
