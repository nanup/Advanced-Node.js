const http = require('http');

const names = [
  {
    name: 'nanu',
    age: 25,
  },
  {
    name: 'sal',
    age: 34,
  },
];

const PORT = 3000;

const server = http.createServer((req, res) => {
  const items = users.split('/');
  if (items[-1] === '0') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        name: 'nanu',
        age: 25,
      })
    );
  } else if (req.url === '/html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <body><ul><li>hello</li><li>how are you doing?</li></ul></body>
    </html>`);
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
