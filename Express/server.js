const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello!');
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
