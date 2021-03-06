import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { txt } from '../../styles/themes/typography';

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
	width: 100%;
  padding: 10px 50px;
	background-color: ${props => props.theme.colors.gray500};
`;

export const LinkTitle = styled(Link)`
  font-size: ${txt.size.h1};
	font-weight: ${txt.weight.bold};
	color: ${props => props.theme.colors.white};
	cursor: pointer;
  text-decoration: none;

	& > span {
		color: ${props => props.theme.colors.primary};
	}
`;
