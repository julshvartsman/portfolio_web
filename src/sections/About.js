import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionHeading className="section-heading">About Me</SectionHeading>
        
        <AboutContent>
          <AboutTextContainer>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AboutText>
                <p>Hello! I'm Julia, a passionate designer and data scientist with a love for creating beautiful, functional solutions to complex problems.</p>
                <p>With a background in ..., I combine analytical thinking with creative design to deliver unique projects that stand out.</p>
                <p>When I'm not coding or designing, you can find me dancing or hiking outdoors.</p>
              </AboutText>
            </motion.div>
          </AboutTextContainer>
          
          <AboutImageContainer>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AboutImage src="/assets/julia.jpg" alt="About Me" />
            </motion.div>
          </AboutImageContainer>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  background-color: ${props => props.theme.backgroundSecondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeading = styled.h2`
  color: ${props => props.theme.headings};
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

const AboutTextContainer = styled.div`
  flex: 1;
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    color: ${props => props.theme.text};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const AboutImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 30px ${props => props.theme.shadow};
`;

export default About;