const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Include and use the GitHub routes
const githubRoutes = require('./routes/githubRoutes');
app.use('/api', githubRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
