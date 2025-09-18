const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const NEWSAPI_KEY = 'c1f44b3e087f40c8983d73c9f2d6c815';

app.get('/news', async (req, res) => {
  const url = `https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=10&apiKey=${NEWSAPI_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});