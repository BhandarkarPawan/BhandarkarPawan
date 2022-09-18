import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 100 900;
	font-display: swap;
	src: url("fonts/Plus Jakarta Sans Variable.woff2") format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
	font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
	"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 900;
}

html{
	--color-primary: hsl(148deg 42% 42%);
	--color-primary-dark: hsl(148deg 42% 36%);
	--color-line: hsl(0deg 0% 37%);

	--filter-white: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7461%) hue-rotate(208deg) brightness(104%) contrast(99%);
	
	--card-width: 300px;
	--card-gap: 16px;
	--max-width: calc((var(--card-width) * 3) + (var(--card-gap) * 4));
}
`;

export default GlobalStyles;
