const path = require('path');

function getMessages(req, res) {
  return res.sendFile(path.join(__dirname, '..', 'public', 'kakashi.png'));
  // return res.send('What messages?');
}

function postMessage(req, res) {
  return res.send('Got it!');
}

module.exports = {
  getMessages,
  postMessage,
};
