const express = require('express');
const app = express();
const port = 3001;
const jsonData = require('./data/data.json');

const groupNames = jsonData.friends.map(friend => friend.name);

app.get('/', (req, res) => {
  res.send(`<h1>Group Names:</h1><ul>${groupNames.map(name => `<li>${name}</li>`).join('')}</ul>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
