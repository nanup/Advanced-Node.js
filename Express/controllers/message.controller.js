function getMessages(req, res) {
  return res.send('What messages?');
}

function postMessage(req, res) {
  return res.send('Got it!');
}

module.exports = {
  getMessages,
  postMessage,
};
