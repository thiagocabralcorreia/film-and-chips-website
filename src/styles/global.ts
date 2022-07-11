import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';
import { txt } from './themes/typography';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}
	body {
		background-color: ${props => props.theme.colors.background};
	}
	::selection {
		color: ${props => props.theme.colors.white};
		background:${props => props.theme.colors.primary};
	}
`;

export const Title = styled.h1`
	font-size: ${txt.size.giant};
	font-weight: ${txt.weight.bold};
	color: ${props => props.theme.colors.title};
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Error = styled.h1`
  font-size: ${txt.size.h1};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  font-weight: ${txt.weight.bold};

  & > span {
		color: ${props => props.theme.colors.alert};
	}
`;
