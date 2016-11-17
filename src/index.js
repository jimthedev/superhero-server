const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    console.log('favicon requested');
    res.end();
    return;
  }
  console.log('hello');
  res.writeHead(451, {'Content-Type': 'text/html'} );
  res.write('<strong>Hello, world!</strong>');
  console.log('We told the user hello!');
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
