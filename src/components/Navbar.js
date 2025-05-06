
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ scrolled, theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <Logo>
          <Link to="home" smooth={true} duration={500} offset={-70}>JS</Link>
        </Logo>
        
        <NavLinks className={menuOpen ? 'active' : ''}>
          <NavItem>
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              offset={-70}
              onClick={closeMenu}
            >
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              offset={-70}
              onClick={closeMenu}
            >
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              offset={-70}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </NavItem>
          <NavItem>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500} 
              offset={-70}
              onClick={closeMenu}
            >
              Skills
            </Link>
          </NavItem>
          <NavItem>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-70}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </NavItem>
        </NavLinks>
        
        <NavControls>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggle>
          
          <MenuButton onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
        </NavControls>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: ${props => props.theme.navbar};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: ${props => props.scrolled ? '0 5px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  padding: ${props => props.scrolled ? '0.75rem 0' : '1.25rem 0'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 600;
  
  a {
    color: ${props => props.theme.headings};
    
    &:hover {
      color: ${props => props.theme.accent};
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: ${props => props.theme.backgroundSecondary};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    transition: right 0.3s ease-in-out;
    box-shadow: -5px 0 30px ${props => props.theme.shadow};
    
    &.active {
      right: 0;
    }
  }
`;

const NavItem = styled.li`
  position: relative;
  
  a {
    color: ${props => props.theme.text};
    font-size: 1.1rem;
    font-family: 'Playfair Display', serif;
    cursor: pointer;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${props => props.theme.accent};
      transition: width 0.3s ease;
    }
    
    &:hover::after,
    &.active::after {
      width: 100%;
    }
  }
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ThemeToggle = styled.button`
  background: transparent;
  color: ${props => props.theme.darkToggle};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export default Navbar;