const express = require('express');
const cors = require('cors');

require('dotenv').config();

const githubRoutes = require('./routes/githubRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());  
app.use('/githubContributions', githubRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
