const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const PORT = 8030;

app.set('view engine', 'ejs');

const server = http.createServer(app);
const io = socketIo(server);

// 사용자 정보 갱신 함수
function getUserList(room) {
    const users = []; // room에 접속한 모든 사용자
    // room은 접속한 룸아이디
    // 채팅룸에 접속한 socket.id값을 찾음(브라우저가 들어올 때 마다 clients 배열에 해당 socket.room 을 가져옴)
    const clients = io.sockets.adapter.rooms.get(room);
    if (clients) {
        clients.forEach((socket) => {
            //io.sockets.sockets: socket.id가 할당한 변수들의 객체값
            const userSocket = io.sockets.sockets.get(socket);
            const info = { username: userSocket.userName, key: socket };
            users.push(info);
        });
    }
    return users;
}
roomList = [];
io.on('connection', (socket) => {
    socket.on('part', (res) => {
        console.log('res', res);
        socket.join(res.roomName);
        console.log('방생성 후', socket.rooms);
        socket.roomName = res.roomName;
        socket.userName = res.userName;
        console.log(res.userName);
        // socket.id
        socket.to(res.roomName).emit('notice', `${socket.userName}님이 입장하셨습니다`);
        if (!roomList.includes(res.roomName)) {
            roomList.push(res.roomName);
            // 갱신된 목록은 전체가 봐야함
            io.emit('roomList', roomList);
        }
        // 사용자 정보 갱신
        const userList = getUserList(res.roomName);
        io.to(res.roomName).emit('userList', userList);
    });
    //브라우저(사용자) 채팅 전송 이벤트===============================================
    socket.on('sendMessage', (res) => {
        console.log(res);
        io.to(socket.roomName).emit('showMessage', { res });
    });
    //브라우저(사용자) 방 나가기 이벤트===============================================
    socket.on('Exit', (res) => {
        console.log('=== @Exit', res);
        console.log('=== @EXit : res.roomName', res.roomName);
        socket.leave(socket.roomName);
        const userList = getUserList(socket.roomName);
        console.log('=== @userList', userList);
        io.to(socket.roomName).emit('ExitMessage', { message: `${res.userName}님이 방을 나가셨습니다`, userList });
    });
});

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
