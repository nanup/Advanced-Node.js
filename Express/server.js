const messageController = require('./controllers/message.controller');
const friendContoller = require('./controllers/friend.controller');

const express = require('express');

const app = express();

const PORT = 3000;

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

app.post('/friends', friendContoller.postFriend);

app.get('/friends', friendContoller.getFriends);

app.get('/friends/:id', friendContoller.getFriendById);

app.get('/messages', messageController.getMessages);

app.post('/messages', messageController.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on the ${PORT}`);
});
