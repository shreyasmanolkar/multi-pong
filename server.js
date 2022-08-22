const http = require('http');
const io = require('socket.io');

const apiServer = require('./api');
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer, { cors: {origin: '*' } });

const sockets = require('./sockets');

const PORT = 3000;
httpServer.listen(PORT);
console.log(`listining on port ${PORT}...`);

sockets.listen(socketServer);