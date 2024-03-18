const express = require('express');
const app = express();
const port = 3002; 
const jsonData = require('./data/data.json');

app.get('/friends', (req, res) => {
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
