import styled from 'styled-components';
import { device } from '../../styles/devices';
import { txt } from '../../styles/themes/typography';

export const MovieContainer = styled.div`
  margin: 40px 50px;
  color:  ${props => props.theme.colors.title};
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 50px;

  @media ${device.tablet} {
		grid-template-columns: 1fr 2fr;
  }

  @media ${device.mobileLarger} {
		display: block;
  }
`;

export const MovieNumbers = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const MovieContentRating = styled.p`
  font-size: ${txt.size.regular};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.text};
  border-radius: 6px;
  padding: 1px 3px;
  margin-right: 6px;

  @media ${device.tablet} {
    font-size: ${txt.size.extraSmall};
  }

  @media ${device.mobileLarger} {
	  font-size: ${txt.size.regular};
  }
`;

export const MovieNumericalData = styled.p`
  font-size: ${txt.size.regular};
  color: ${props => props.theme.colors.title};
  display: flex;

  & > span {
    margin: 0 6px;
    font-weight: ${txt.weight.extrabold};
    color: ${props => props.theme.colors.primary};
  }

  @media ${device.tablet} {
    font-size: ${txt.size.extraSmall};
  }

  @media ${device.mobileLarger} {
	  font-size: ${txt.size.regular};
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
    font-size: ${txt.size.regular};
    width: 100px;
    display: inline-block;
  }

  & > span {
    color: ${props => props.theme.colors.text};
  }
`;

export const MoviePoster = styled.img`
  width: 100%;

  @media ${device.mobileLarger} {
		margin-bottom: 20px;
  }
`;

export const MovieSectionTitle = styled(MovieTitle)`
  padding: 20px 0;
  font-size: ${txt.size.h2};

  & > span {
    color: ${props => props.theme.colors.primary};
    font-weight: ${txt.weight.extrabold};
  }
`;

export const MovieCast = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
`;

export const MarginRight = styled.div`
  margin-right: 20px;
`;
