import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Averta';
    src: url('/assets/fonts/AvertaDemo-Regular.otf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Averta', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

`;

export default GlobalStyle;
