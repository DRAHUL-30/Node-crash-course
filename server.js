const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request made');
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`Listening for requests on http://${HOST}:${PORT}`);
});
