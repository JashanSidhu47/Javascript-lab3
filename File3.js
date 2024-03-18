const express = require('express');
const app = express();
const port = 3003; 
const fs = require('fs');

let friends = require('./data/data.json').friends;

app.use(express.json());

// Read operation - Get all friends
app.get('/friends', (req, res) => {
  res.json(friends);
});

// Create operation - Add new friend
app.post('/friends', (req, res) => {
  const newFriend = req.body;
  friends.push(newFriend);
  saveData();
  res.status(201).json(newFriend);
});

// Update operation - Update an existing friend
app.put('/friends/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedFriend = req.body;
  friends = friends.map(friend => (friend.id === id ? updatedFriend : friend));
  saveData();
  res.json(updatedFriend);
});

// Delete operation - Delete an existing friend
app.delete('/friends/:id', (req, res) => {
  const id = parseInt(req.params.id);
  friends = friends.filter(friend => friend.id !== id);
  saveData();
  res.sendStatus(204);
});

function saveData() {
  fs.writeFile('./data/data.json', JSON.stringify({ friends }), 'utf8', err => {
    if (err) {
      console.log('Error writing file:', err);
    }
  });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
