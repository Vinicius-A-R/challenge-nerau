import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
  --color-primary: #2E7BB2;
  --color-primary-light: #3286C3;
  --color-primary-dark: #1D4F91;
  --color-secondary: #FF5E0F;
  --color-secondary-dark: #D44513;
  --color-third: #FFBF3F;
  --color-fourth: #78BE21;
}

*{
  margin: 0;
  padding: 0;
	outline: 0;
  box-sizing: border-box;
}

body {
  font-family: 'PT Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #E5E5E5;
}

a{
  text-decoration: none;
}

button {
  border: 0;
  background: none;
	cursor: pointer;
}

ul{
  list-style: none;
  padding-left: 0;
}
`;
