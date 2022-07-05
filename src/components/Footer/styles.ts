
import styled from 'styled-components';
import { txt } from '../../styles/themes/typography';

export const FooterContainer = styled.div`
	width: 100%;
	box-shadow: 0px 0px 0px;
  padding: 10px 20px;
	position: relative;
	background-color: ${props => props.theme.colors.gray500};
`;

export const FooterText = styled.p`
  font-size: ${txt.size.extraSmall};
	font-weight: ${txt.weight.regular};
	color: ${props => props.theme.colors.white};
`;
