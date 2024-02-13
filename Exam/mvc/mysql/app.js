// 회원가입, 로그인(회원 검색) , 회원 정보 수정, 회원 탈퇴
const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

// 미들웨어 : 뷰 연결 + 데이터 전송
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 세션 미들웨어 설정
app.use(
    session({
        secret: 'your-secret-key', // 세션 데이터를 암호화할 때 사용되는 키
        resave: false, // 세션 데이터가 변경되지 않았더라도 세션을 저장할지 여부
        saveUninitialized: true, // 초기화되지 않은 세션을 저장할지 여부
    })
);

// router
// localhost:8000
const pageRouter = require('./routes/pageRouter');
app.use('/', pageRouter);

// localhost:8000/api
const apiRouter = require('./routes/apiRouter');
app.use('/api', apiRouter);

// 에러 페이지
app.get('*', (req, res) => {
    res.render('404');
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
