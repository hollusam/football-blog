const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3002;

app.use(cors());

app.get('/api/football-data/*', async (req, res) => {
  try {
    const response = await axios.get(`https://api.football-data.org/v2/${req.params[0]}`, {
      headers: {
        'X-Auth-Token': '6510c0ff4a75454b80dde25e3936bd5c', // Replace with your actual Football Data API key
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Football Data API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
