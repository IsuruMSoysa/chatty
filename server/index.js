const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const   PORT = process.env.PORT || 4000;

const router = require('./router');
const { Socket } = require('dgram');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(socket) => {
    console.log('new user connected!!!');

    Socket.on('disconnect',() =>{
        console.log('user had left!!!');
    })
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port no ${PORT}`));