const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World');
});

// once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts
server.listen(8000, () => console.log('API running on port 8000'));