const express = require('express');
const app = express();
const PORT = 8000;

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
// 페이지
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/submit', (req, res) => {
    res.render('submit');
});
app.get('/function', (req, res) => {
    res.render('function');
});
// 페이지 끝

// 프론트 요청 & 백엔드 응답
// ajax
app.get('/ajax', (req, res) => {
    console.log('요청값 : ', req.query);
    const { name, email } = req.query;
    // 백엔드 → 프론트 : 데이터 전달 시 규칙 정하기
    res.send({ result: true, name: `${name}님`, email: `주소 : ${email}` });
});

app.post('/ajax', (req, res) => {
    console.log('요청값 : ', req.body);
    const { name, email } = req.body;
    // 백엔드 → 프론트
    res.send({ result: true, username: name, email });
});

// axios
app.get('/axios', (req, res) => {
    console.log('요청값 : ', req.query);
    // 백엔드 → 프론트 : res.send(data : req.query) 형태로 전달됨
    res.send(req.query);
});
app.post('/axios', (req, res) => {
    console.log('요청값 : ', req.body);
    const { username, email } = req.body;
    // 백엔드 → 프론트 : res.send(data : req.body) 형태로 전달됨
    const data = {
        name: `안녕하세요 ${username}님`,
        address: `주소는 ${email}입니다.`,
    };
    res.send(data);
});

// fetch
app.get('/fetch', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});
app.post('/fetch', (req, res) => {
    console.log('요청값', req.body);
    res.send(req.body);
});
// 서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
