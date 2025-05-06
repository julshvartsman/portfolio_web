import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <HeroSection id="home">
      <BackgroundCircle className="bg-circle-1" />
      <BackgroundCircle className="bg-circle-2" />
      
      <HeroContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ProfileCircle>
            <ProfileImage src="/assets/profile.jpg" alt="Julia Shvartsman" />
          </ProfileCircle>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ProfileName>
            <h1>Julia Shvartsman</h1>
            <p>Designer & Data Scientist</p>
          </ProfileName>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <HeroActions>
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <PrimaryButton>View My Work</PrimaryButton>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <OutlineButton>Get In Touch</OutlineButton>
            </Link>
          </HeroActions>
        </motion.div>
      </HeroContainer>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding-top: 6rem;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.03));
  
  &.bg-circle-1 {
    top: -10%;
    right: -10%;
    width: 70vw;
    height: 70vw;
    background: radial-gradient(circle at center, 
      ${props => `${props.theme.background}20`}, 
      ${props => `${props.theme.background}05`});
  }
  
  &.bg-circle-2 {
    bottom: -20%;
    left: -10%;
    width: 80vw;
    height: 80vw;
    background: radial-gradient(circle at center, 
      ${props => `${props.theme.background}20`}, 
      ${props => `${props.theme.background}05`});
  }
`;

const HeroContainer = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 2rem;
  z-index: 1;
`;

const ProfileCircle = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 2rem;
  border: 5px solid ${props => props.theme.backgroundSecondary};
  box-shadow: 0 10px 30px ${props => props.theme.shadow};
  
  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileName = styled.div`
  margin-bottom: 2.5rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    
    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }
  
  p {
    font-size: 1.3rem;
    color: ${props => props.theme.textSecondary};
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background-color: ${props => props.theme.accent};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px ${props => props.theme.shadow};
  }
`;

const OutlineButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.text};
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.backgroundSecondary};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px ${props => props.theme.shadow};
  }
`;

export default Hero;

