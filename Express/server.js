const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Nanu Panchamurthy',
  },
  {
    id: 1,
    name: 'Anil Kumar Pappu',
  },
  {
    id: 2,
    name: 'Akhil Kumar Tangi',
  },
];

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:id', (req, res) => {
  if (+req.params.id < friends.length) {
    res.json(friends[+req.params.id]);
  } else {
    res.sendStatus(404).json({
      error: "Friend doesn't exist.",
    });
  }
});

app.get('/messages', (req, res) => {
  res.send('What messages?');
});

app.post('/messages', (req, res) => {
  res.send('Got it!');
});

app.listen(PORT, () => {
  console.log(`Listening on the ${PORT}`);
});
