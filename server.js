// LIBRARIES
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
app.use('/imgs', express.static('imgs'));

// CLIENT CONNECTION
io.on('connection', (socket) => {
    console.log('Nuovo utente connesso');

    socket.on('tweet', (msg) => {
        console.log('Ricevuto tweet dal client:', msg);
        const tweetData = {
            content: msg,
            timestamp: new Date().toLocaleTimeString()
        };
        io.emit('ricevi-tweet', tweetData);
    });

    socket.on('disconnect', () => {
        console.log('Utente disconnesso');
    });
});

server.listen(3000, () => {
    console.log('Server in ascolto su http://localhost:3000');
});