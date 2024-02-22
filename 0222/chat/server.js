const express = require('express');
const http = require('http');
const app = express();
const socketIo = require('socket.io');
const PORT = 8000;

const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

// 사용자 정보 갱신 함수
function getUserList(room) {
    const users = []; // room에 접속한 모든 사용자
    // room은 접속한 룸아이디
    // 채팅룸에 접속한 socket.id값을 찾음(브라우저가 들어올 때 마다 clients 배열에 해당 socket.room 을 가져옴)
    const clients = io.sockets.adapter.rooms.get(room);
    // console.log('clients', clients);
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
const roomList = [];
io.on('connection', (socket) => {
    // 웹브라우저가 생성되면 고유한 id가 생성됨 + 접속할 때 마다 새로운 브라우저가 생성됨
    console.log(socket.id);
    // 채팅방 만들기
    socket.on('create', (res, cb) => {
        // join(방 이름): 해당 방이름이 없으면 생성. 존재하면 입장
        // console.log(res); // res는 객체 형태 join()에 res 를 그대로 넣으면 안됨
        // socket.join(res.roomName);
        // console.log('방생성 후', socket.rooms);
        //socket객체 안에 원하는 값을 할당
        socket.roomName = res.roomName;
        socket.userName = res.userName;
        // 나를 제외한 모든 방사람에게 메시지 전달 : "나"의 브라우저에서는 보이지 않음.
        // socket.broadcast(광범위한 서비스).to 혹은 io.to()
        socket.to(res.roomName).emit('notice', `${socket.id}님이 입장하셨습니다`);
        // 채팅방 목록 갱신
        if (!roomList.includes(res.roomName)) {
            roomList.push(res.roomName);
            // 갱신된 목록은 전체가 봐야함
            io.emit('roomList', roomList);
        }
        // 사용자 정보 갱신
        const userList = getUserList(res.roomName);
        io.to(res.roomName).emit('userList', userList);
    });

    //메시지 받음
    socket.on('sendMessage', (res) => {
        // console.log(res);
        const { message, user, select } = res;
        if (select === 'all') {
            io.to(socket.roomName).emit('newMessage', { message, user, dm: false });
        } else {
            io.to(select).emit('newMessage', { message, user, dm: true });
            //자기자신에게도 메세지 보내기
            socket.emit('newMessage', { message, user, dm: true });
        }
    });
});

app.get('/client', (req, res) => {
    res.render('client');
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
