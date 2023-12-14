const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, 'Request made');
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Hey Buddy!</p>');
    res.end()
});

const PORT = 3002;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`Listening for requests on http://${HOST}:${PORT}`);
});
