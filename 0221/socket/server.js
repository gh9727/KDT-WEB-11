const http = require('http'); // http 모듈
const express = require('express');
const socketIo = require('socket.io'); // 소켓 모듈
const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);
//socket서버
const io = socketIo(server);

//미들웨어
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});
app.get('/chat', (req, res) => {
    res.render('chat');
});

// 소켓 기본채팅 예제
// TIP) 전역 객체 할당 : socket.chatRoom
// TIP) io.to(특정방아이디).emit(이벤트): 특정방의 전체 사용자에게 메시지 전달
// -> socket.to 를 쓰면 안되는 이유: socket은 브라우저 1개를 의미하기 때문!
io.on('connection', (socket) => {
    console.log('조인 전', socket.rooms);
    socket.on('join', (res) => {
        // 채팅방 생성하는 방법 중 하나는 join(방아이디) 사용. 방이 존재하면 그 방으로 접속하게 됨
        socket.join(res);
        socket.chatRoom = res;
        console.log('조인 후', socket.rooms);
        //broadcast는 나(현재 접속한 브라우저)를 제외한 전체사용자(브라우저)에게 메시지 전달
        socket.broadcast.to(res).emit('create', '새로운 브라우저가 입장하였습니다.');
    });

    socket.on('message', (res) => {
        io.to(socket.chatRoom).emit('chat', res);
    });
});

// 이 방식을 사용해야 하는 이유
/* 결론: 브라우저 하나에만 보내기 때문에 다른 브라우저(Edge)와 통신이 되지 않음
 * 이 방식을 사용해야 하는 이유
 * 웹소켓 방식을 쓰면 모두가 주소만 알면 동일한 통신이 가능함
 * 보안에 매우 좋지 않음
 * 방을 파서 방에 존재하는 사람들끼리 통신하도록 만들어야함
 */
// socket 기본 예제
// io.on('connection', (socket) => {
//     console.log('조인 전', socket);
//     socket.on('open_message', (arg, arg2, arg3, cb) => {
//         console.log('서버', arg, arg2, arg3);
//         cb(arg, arg2, arg3);
//     });

//     socket.on('form_message', (arg) => {
//         console.log(arg);
//         socket.emit('back_message', arg);
//     });
// });

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
