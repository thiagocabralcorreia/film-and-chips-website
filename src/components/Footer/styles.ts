
import styled from 'styled-components';
import { txt } from '../../styles/themes/typography';

export const FooterContainer = styled.div`
	width: 100%;
	box-shadow: 0px 0px 0px;
  padding: 20px 50px;
	background-color: ${props => props.theme.colors.gray500};
`;

export const SocialMedias = styled.div`
	display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.white};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const SocialMediaIcon = styled.i`
  font-size: ${txt.size.extraBig};
  color: ${props => props.theme.colors.white};
  transition: 0.5s;
  cursor: pointer;
  margin: 0px 10px;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: ${txt.size.extraSmall};
	font-weight: ${txt.weight.regular};
	color: ${props => props.theme.colors.white};

	& > span {
    margin: 0 5px;
		color: ${props => props.theme.colors.primary};
    font-weight: ${txt.weight.extrabold};
	}
`;

export const LinkedInLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  transition: 0.5s;
  cursor: pointer;

	&:hover {
		color: ${props => props.theme.colors.primary};
	}
`;
