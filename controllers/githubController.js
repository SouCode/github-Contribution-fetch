const githubModel = require('../models/githubModel');

const fetchGitHubContributions = async (req, res) => {
  const { user } = req.query;
  try {
    const data = await githubModel.fetchContributions(user);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching GitHub contribution data:', error);
    res.status(500).json({ error: 'Error fetching GitHub contribution data' });
  }
};

module.exports = { fetchGitHubContributions };
