// src/sections/Skills.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const skillsData = {
  dataScience: [
    "Python",
    "Data Cleaning",
    "Machine Learning",
    "Data Visualization",
    "Statistical Analysis"
  ],
  webDev: [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Responsive Design"
  ]
};

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionHeading className="section-heading">My Skills</SectionHeading>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SkillsGrid>
            
            <motion.div variants={itemVariants}>
              <SkillCategory>
                <CategoryHeading>Data Science</CategoryHeading>
                <SkillsList>
                  {skillsData.dataScience.map((skill, index) => (
                    <SkillItem key={index}>
                      <SkillName>{skill}</SkillName>
                      <SkillBar>
                        <SkillProgress width={`${90 - index * 5}%`} />
                      </SkillBar>
                    </SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <SkillCategory>
                <CategoryHeading>Web Development</CategoryHeading>
                <SkillsList>
                  {skillsData.webDev.map((skill, index) => (
                    <SkillItem key={index}>
                      <SkillName>{skill}</SkillName>
                      <SkillBar>
                        <SkillProgress width={`${85 - index * 5}%`} />
                      </SkillBar>
                    </SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>
            </motion.div>
          </SkillsGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  background-color: ${props => props.theme.backgroundSecondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeading = styled.h2`
  color: ${props => props.theme.headings};
  text-align: center;
  margin-bottom: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const SkillCategory = styled.div`
  background: ${props => props.theme.card};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 5px 15px ${props => props.theme.shadow};
  border: 1px solid ${props => props.theme.border};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CategoryHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.headings};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${props => props.theme.accent};
  }
`;

const SkillsList = styled.ul`
  list-style: none;
`;

const SkillItem = styled.li`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillName = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: ${props => props.theme.text};
`;

const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${props => `${props.theme.accent}20`};
  border-radius: 10px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  height: 100%;
  width: ${props => props.width};
  background-color: ${props => props.theme.accent};
  border-radius: 10px;
`;

export default Skills;

