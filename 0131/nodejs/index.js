// require() 메서드 : module.js 모듈 불러오기 → .js 생략 가능
// const connect = require('./module.js');

// 구조 분해 할당 : module.js 객체 모듈 불러오기
// module.js 모듈 변수명과 구조 분해 할당 시 받을 변수명이 서로 다르면 충돌발생
// const { c, d, e, connect } = require('./module.js');
// console.log(c, d, e);
// console.log(connect);
// console.log(connect());

// 서버 만들기

// http 모듈 받아오기
const http = require('http');
const fs = require('fs');
// 서버 생성 createServer
const server = http.createServer(function (req, res) {
    // res.writeHead(201);
    // res.write('<h1>Hello Node js</h1>');
    // res.end('<p>End</p>');
    // 파일 전송
    // try ~ catch : 예외 처리
    try {
        const data = fs.readFileSync('index.html');
        res.writeHead(200);
        res.end(data);
    } catch (error) {
        console.log(error);
        res.write(404);
        res.end(error.message);
    }
});
// 서버 실행 listen()
server.listen(8000, function () {
    console.log('8000번 포트를 이용하여 서버 생성');
});

// // 클라이언트가 페이지에서 무언가를 요청하였을 때 발생시켜줄 이벤트 코드 작성
// server.on('request', function () {
//     console.log('요청 이벤트');
// });

// // 클라이언트가 페이지에 접속했을 때 발생시켜줄 이벤트 코드 작성
// server.on('connection', function () {
//     console.log('접속 이벤트');
// });
