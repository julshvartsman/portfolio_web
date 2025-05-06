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
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Libre Baskerville', serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    color: ${props => props.theme.headings};
  }
  
  p {
    font-family: 'Cormorant Garamond', serif;
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
    font-family: 'Playfair Display', serif;
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

// src/styles/Themes.js
export const lightTheme = {
  background: '#f8f8f8',
  backgroundSecondary: '#ffffff',
  text: '#333333',
  textSecondary: '#666666',
  headings: '#111111',
  primary: '#4a4a4a',
  secondary: '#767676',
  accent: '#6d56c1',
  border: '#e0e0e0',
  shadow: 'rgba(0, 0, 0, 0.1)',
  card: 'rgba(255, 255, 255, 0.9)',
  cardHover: 'rgba(255, 255, 255, 1)',
  navbar: 'rgba(255, 255, 255, 0.9)',
  darkToggle: '#111111'
};

export const darkTheme = {
  background: '#121212',
  backgroundSecondary: '#1e1e1e',
  text: '#f5f5f5',
  textSecondary: '#b0b0b0',
  headings: '#ffffff',
  primary: '#c8c8c8',
  secondary: '#a0a0a0',
  accent: '#9c85f0',
  border: '#2c2c2c',
  shadow: 'rgba(0, 0, 0, 0.3)',
  card: 'rgba(30, 30, 30, 0.9)',
  cardHover: 'rgba(40, 40, 40, 1)',
  navbar: 'rgba(18, 18, 18, 0.9)',
  darkToggle: '#f5f5f5'
};