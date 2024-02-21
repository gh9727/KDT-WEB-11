const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    socket.on('hello', (arg) => {
        console.log('client : ', arg.hello);
        socket.emit('back_hello', arg);
    });

    socket.on('study', (arg) => {
        console.log('client : ', arg.study);
        socket.emit('back_study', arg);
    });

    socket.on('bye', (arg) => {
        console.log('client : ', arg.bye);
        socket.emit('back_bye', arg);
    });
});

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('client');
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
