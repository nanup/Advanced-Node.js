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

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const end = Date.now();
  console.log(end - start);
});

app.get('/', (req, res) => {
  return res.send('Hello!');
});

app.use(express.json());

app.post('/friends', (req, res) => {
  if (!req.body.name) {
    return res.sendStatus(400).json({
      error: 'Missing friend name.',
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);
  return res.json(newFriend);
});

app.get('/friends', (req, res) => {
  return res.json(friends);
});

app.get('/friends/:id', (req, res) => {
  if (+req.params.id < friends.length) {
    return res.json(friends[+req.params.id]);
  } else {
    return res.sendStatus(404).json({
      error: "Friend doesn't exist.",
    });
  }
});

app.get('/messages', (req, res) => {
  return res.send('What messages?');
});

app.post('/messages', (req, res) => {
  return res.send('Got it!');
});

app.listen(PORT, () => {
  console.log(`Listening on the ${PORT}`);
});
