// src/sections/Projects.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fetchGitHubRepos } from '../api';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Tech Stack Categories for filtering
const techCategories = {
  'python': 'data-science',
  'jupyter': 'data-science',
  'pandas': 'data-science',
  'numpy': 'data-science',
  'scikit-learn': 'data-science',
  'tensorflow': 'data-science',
  'pytorch': 'data-science',
  'r': 'data-science',
  'statistics': 'data-science',
  'machine-learning': 'data-science',
  
  'react': 'web',
  'javascript': 'web',
  'html': 'web',
  'css': 'web',
  'bootstrap': 'web',
  'tailwind': 'web',
  'vue': 'web',
  'node': 'web',
  'express': 'web',
  'frontend': 'web',
  
  'design': 'design',
  'ui': 'design',
  'ux': 'design',
  'figma': 'design',
  'sketch': 'design',
  'photoshop': 'design',
  'illustrator': 'design',
  'typography': 'design',
  'animation': 'design'
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const repos = await fetchGitHubRepos();
        
        // Filter out forked repositories
        const filteredRepos = repos.filter(repo => !repo.fork);
        
        // Process repositories with categories
        const processedRepos = filteredRepos.map(repo => {
          const categories = ['all'];
          
          if (repo.topics && repo.topics.length > 0) {
            repo.topics.forEach(topic => {
              if (techCategories[topic.toLowerCase()]) {
                if (!categories.includes(techCategories[topic.toLowerCase()])) {
                  categories.push(techCategories[topic.toLowerCase()]);
                }
              }
            });
          }
          
          return {
            ...repo,
            categories
          };
        });
        
        setProjects(processedRepos);
        setLoading(false);
      } catch (err) {
        setError('Failed to load projects');
        setLoading(false);
        console.error('Error loading projects:', err);
      }
    };
    
    loadProjects();
  }, []);
  
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <ProjectsSection id="projects">
      <Container>
        <SectionHeading className="section-heading">My Projects</SectionHeading>
        
        {/* Filter Buttons */}
        <FilterContainer>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => handleFilterChange('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'data-science'} 
            onClick={() => handleFilterChange('data-science')}
          >
            Data Science
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'web'} 
            onClick={() => handleFilterChange('web')}
          >
            Web Development
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'design'} 
            onClick={() => handleFilterChange('design')}
          >
            Design
          </FilterButton>
        </FilterContainer>
        
        {/* Projects Grid */}
        {loading ? (
          <LoadingContainer>
            <Spinner />
            <p>Loading projects...</p>
          </LoadingContainer>
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <ProjectsGrid>
              {filteredProjects.length === 0 ? (
                <NoProjects>No projects found in this category</NoProjects>
              ) : (
                filteredProjects.map(project => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard>
                      <ProjectTitle>{project.name}</ProjectTitle>
                      <ProjectDescription>
                        {project.description || 'No description available'}
                      </ProjectDescription>
                      
                      {project.topics && project.topics.length > 0 && (
                        <TechStack>
                          {project.topics.slice(0, 5).map(tech => (
                            <TechTag key={tech}>{tech}</TechTag>
                          ))}
                        </TechStack>
                      )}
                      
                      <ProjectLinks>
                        <ProjectLink href={project.html_url} target="_blank" rel="noopener noreferrer">
                          <FaGithub /> GitHub
                        </ProjectLink>
                        {project.homepage && (
                          <ProjectLink 
                            href={project.homepage} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            isDemo
                          >
                            <FaExternalLinkAlt /> Demo
                          </ProjectLink>
                        )}
                      </ProjectLinks>
                    </ProjectCard>
                  </motion.div>
                ))
              )}
            </ProjectsGrid>
          </motion.div>
        )}
      </Container>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section``;

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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? props.theme.accent : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.text};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.95rem;
  border: 1px solid ${props => props.active ? props.theme.accent : props.theme.border};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? props.theme.accent : props.theme.backgroundSecondary};
    transform: translateY(-3px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${props => props.theme.card};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px ${props => props.theme.shadow};
  border: 1px solid ${props => props.theme.border};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px ${props => props.theme.shadow};
    background: ${props => props.theme.cardHover};
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.headings};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${props => `${props.theme.accent}20`};
  color: ${props => props.theme.text};
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  background: ${props => props.isDemo ? 'transparent' : props.theme.accent};
  color: ${props => props.isDemo ? props.theme.text : 'white'};
  border: 1px solid ${props => props.isDemo ? props.theme.border : props.theme.accent};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px ${props => props.theme.shadow};
    background: ${props => props.isDemo ? props.theme.backgroundSecondary : props.theme.accent};
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${props => `${props.theme.accent}30`};
  border-top-color: ${props => props.theme.accent};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: #e74c3c;
  padding: 2rem;
`;

const NoProjects = styled.p`
  text-align: center;
  grid-column: 1 / -1;
  padding: 2rem;
  color: ${props => props.theme.textSecondary};
`;

export default Projects;