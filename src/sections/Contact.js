import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all fields'
      });
      return;
    }
    
   
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you! Your message has been sent.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };
  
  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeading className="section-heading">Get In Touch</SectionHeading>
        
        <ContactContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContactForm onSubmit={handleSubmit}>
              {formStatus.message && (
                <FormMessage error={formStatus.error}>
                  {formStatus.message}
                </FormMessage>
              )}
              
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry"
                  rows="5"
                />
              </FormGroup>
              
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SocialLinks>
              <SocialLink href="https://github.com/julshvartsman" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </SocialLink>
              <SocialLink href="julia_shvartsman@berkeley.edu">
                <FaEnvelope />
              </SocialLink>
              <SocialLink href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

const ContactSection = styled.section``;

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

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

const ContactForm = styled.form`
  background: ${props => props.theme.card};
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 10px 30px ${props => props.theme.shadow};
  border: 1px solid ${props => props.theme.border};
`;

const FormMessage = styled.div`
  background: ${props => props.error ? '#ffebee' : '#e8f5e9'};
  color: ${props => props.error ? '#c62828' : '#2e7d32'};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  color: ${props => props.theme.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  background: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.text};
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.accent};
  }
  
  &::placeholder {
    color: ${props => props.theme.textSecondary};
    opacity: 0.5;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  background: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.text};
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.accent};
  }
  
  &::placeholder {
    color: ${props => props.theme.textSecondary};
    opacity: 0.5;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.8rem 1rem;
  background: ${props => props.theme.accent};
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px ${props => props.theme.shadow};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.card};
  color: ${props => props.theme.text};
  font-size: 1.25rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px ${props => props.theme.shadow};
  border: 1px solid ${props => props.theme.border};
  
  &:hover {
    transform: translateY(-5px);
    background: ${props => props.theme.accent};
    color: white;
  }
`;

export default Contact;