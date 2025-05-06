import axios from 'axios';

const GITHUB_USERNAME = 'julshvartsman'; 

// Function to fetch GitHub repositories
export const fetchGitHubRepos = async () => {
  try {
    // For deployment, we can use a serverless function
    // const response = await axios.get(`/api/github`);
    
    // For development/direct API call
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

