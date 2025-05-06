// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; {currentYear} Julia Shvartsman. All rights reserved.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${props => props.theme.backgroundSecondary};
  padding: 2rem 0;
  border-top: 1px solid ${props => props.theme.border};
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const FooterText = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
  font-family: 'Libre Baskerville', serif;
`;

export default Footer;

