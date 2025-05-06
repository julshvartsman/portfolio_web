// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: ${props => props.theme.headings};
  }
  
  p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.secondary};
    }
  }
  
  button {
    font-family: Georgia, 'Times New Roman', Times, serif;
    cursor: pointer;
    border: none;
    outline: none;
  }
  
  section {
    padding: 5rem 1rem;
    
    @media (min-width: 768px) {
      padding: 7rem 2rem;
    }
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-heading {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: ${props => props.theme.accent};
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;