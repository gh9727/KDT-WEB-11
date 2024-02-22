const express = require('express');
const http = require('http');
const app = express();
const socketIo = require('socket.io');
const PORT = 8000;

const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    // 웹브라우저가 생성되면 고유한 id가 생성됨 + 접속할 때 마다 새로운 브라우저가 생성됨
    console.log(socket.id);
    // 채팅방 만들기
    socket.on('create', (res, cb) => {
        // join(방 이름): 해당 방이름이 없으면 생성. 존재하면 입장
        console.log(res); // res는 객체 형태 join()에 res 를 그대로 넣으면 안됨
        socket.join(res.roomName);
        console.log('방생성 후', socket.rooms);
        //socket객체 안에 원하는 값을 할당
        socket.roomName = res.roomName;
        socket.userName = res.userName;
        // 나를 제외한 모든 방사람에게 메시지 전달 : "나"의 브라우저에서는 보이지 않음.
        // socket.broadcast(광범위한 서비스).to 혹은 io.to()
        socket.to(res.roomName).emit('notice', `${socket.id}님이 입장하셨습니다`, socket.id);
        cb();
    });

    //메시지 받음
    socket.on('sendMessage', (res) => {
        console.log(res);
        const { message, user } = res;
        io.to(socket.roomName).emit('newMessage', { message, user });
    });

    //DM
    socket.on('DM', (res) => {
        const { message, user, sid } = res;
        if (sid) {
            io.to(sid).emit('back_DM', { message, user: `(속닥속닥) ${user}` });
        }
    });
});

app.get('/client', (req, res) => {
    res.render('client');
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
