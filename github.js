const axios = require('axios');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  // Get GitHub username from environment variable or default
  const username = process.env.GITHUB_USERNAME || 'julshvartsman';
  
  try {
    // Fetch repositories from GitHub API
    const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
    
    // Filter and format repositories
    const repos = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description || 'No description available',
      homepage: repo.homepage || null,
      topics: repo.topics || [],
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      fork: repo.fork
    }));
    
    // Return repositories as JSON
    res.status(200).json(repos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
};