const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
// app.use(express.json());
app.use(cookieParser()); // 일반쿠키
// 쿠키 옵션
/*
 * httpOnly: 웹 서버를 통해서만 쿠키에 접근 가능
  → 자바스크립트에서 document.cookie를 이용해서 쿠키에 접근하는 것을 차단
 * maxAge: 쿠키의 수명
 * expires: GMT 시간으로 설정
 * path(잘 안씀): 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화됨
  → 웹브라우저는 해당하는 쿠키만 웹서버에 전송. 쿠키가 전송될 URL을 지정가능(기본값 :'/')
 * domain: 쿠키가 전송될 도메인을 지정 가능(기본값: 현재 도메인)  
 * secure: https로 통신하는 경우만 쿠키를 전송
 * signed: 쿠키의 암호화 결정 
 */
const cookieConfig = {
    httpOnly: true,
    maxAge: 60 * 1000, // 1분
};
// router
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/setCookie', (req, res) => {
    res.cookie('myCookie', 'myValue', cookieConfig);
    res.send('쿠키 설정하기');
});
app.get('/getCookie', (req, res) => {
    res.send(req.cookies.myCookie);
});
app.get('/clearCookie', (req, res) => {
    res.clearCookie('myCookie');
    res.send('쿠키 삭제');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
