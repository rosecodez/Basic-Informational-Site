/* eslint-disable no-console */
const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  let filename = `.${q.pathname}`;

  if (q.pathname === '/') {
    filename = './index.html';
  }

  fs.readFile(filename, (err, data) => {
    if (!err) {
      console.log(`received data: ${data}`);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    } else {
      console.log(err);
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('404 Not Found');
    }
  });
}).listen(8080);
