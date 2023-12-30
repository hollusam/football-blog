const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

// Mock data (replace with your own data)
const articles = require('./data/articles.json');

// API endpoints for mock data
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// Run your proxy server on http://localhost:3002
// Update your frontend API calls to use this proxy server
app.use('/api/football-data', (req, res) => {
  req.pipe(request(`http://localhost:3002${req.url}`)).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
