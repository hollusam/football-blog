const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mock data (replace with your own data)
const articles = require('./data/articles.json');
const news = require('./data/news.json');
const liveScores = require('./data/live-scores.json');

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.get('/api/news', (req, res) => {
  res.json(news);
});

app.get('/api/live-scores', (req, res) => {
  res.json(liveScores);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
