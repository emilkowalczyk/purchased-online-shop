import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;    
  }

  html, body {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 30px;

  @media (min-width: 1024px) {
    padding: 0 100px;
    margin: 0 auto;
    max-width: 1920px;
  }
`;
