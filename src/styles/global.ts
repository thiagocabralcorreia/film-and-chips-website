import { createGlobalStyle } from 'styled-components';

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
