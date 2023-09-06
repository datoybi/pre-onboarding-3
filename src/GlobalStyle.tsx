import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset}
  *, *::before, *::after {
    box-sizing: border-box;
		margin: 0;
		padding: 0;
  }
  body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #d0e8fd;
  }

	* {
		border: 0;
	}
	
	*:focus {outline: none;}
`;

export default GlobalStyle;
