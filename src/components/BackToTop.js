import React from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const BackToTop = ({ visible }) => {
  return (
    <BackToTopButton visible={visible}>
      <Link to="home" smooth={true} duration={500} offset={-70}>
        <FaArrowUp />
      </Link>
    </BackToTopButton>
  );
};

const BackToTopButton = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  z-index: 100;
  box-shadow: 0 5px 15px ${props => props.theme.shadow};
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: white;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px ${props => props.theme.shadow};
  }
`;

export default BackToTop;