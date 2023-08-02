const messageController = require('./controllers/message.controller');

const express = require('express');
const friendsRouter = require('./routers/friends.router');
const messagesRouter = require('./routers/messages.router');

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

app.use('/friends', friendsRouter);

app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on the ${PORT}`);
});
