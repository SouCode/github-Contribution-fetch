const express = require('express');
const router = express.Router();
const githubController = require('../controllers/githubController');

router.get('/githubContributions', githubController.fetchGitHubContributions);

module.exports = router;
