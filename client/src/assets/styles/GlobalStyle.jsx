import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after, *::placeholder {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-decoration: none;
    color: #000;
  }

  html, body {
    font-family: 'GillSansNova', sans-serif;
    font-weight: 400;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 24px;

  @media (min-width: 1024px) {
    padding: 0 100px;
    margin: 0 auto;
    max-width: 1920px;
  }
`;
