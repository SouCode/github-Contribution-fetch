const express = require('express');
require('dotenv').config();
const githubRoutes = require('./routes/githubRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/githubContributions', githubRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
