const express = require('express');
const app = express();
const PORT = 8000;

// 미들웨어 ejs 파일 불러오기 + 뷰 엔 진 은 ejs 쓴 다 view 쓰 지 말 것
app.set('view engine', 'ejs');
app.set('views', './views');

// 미들웨어 body-parser : 데이터 처리
app.use(express.urlencoded({ extended: true })); // 쿼리스트링 처리
app.use(express.json()); // json 객체 처리

// 라우터(서버 생성)
app.get('/', (req, res) => {
    // 클라이언트 뷰 랜더링
    res.render('index');
});

// get 방식으로 Form 데이터 전달받고 새 뷰에 받은 데이터 띄어주기
app.get('/getForm', (req, res) => {
    res.render('getForm');
});
app.get('/getResult', (req, res) => {
    const { username, gender, year, month, date, interest, color, number } = req.query;
    res.render('result', {
        title: 'GET 방식',
        userinfo: {
            username,
            gender,
            year,
            month,
            date,
            interest: { return: true, interest: interest },
            color: { return: false, color: color },
            number: { return: false, number: number },
        },
    });
});

// post 방식은 데이터를 받을 때 만 연 결 할 수 있 다
app.get('/postForm', (req, res) => {
    res.render('postForm');
});
app.post('/postResult', (req, res) => {
    const { username, gender, year, month, date, interest, color, number } = req.body;
    res.render('result', {
        title: 'POST 방식',
        userinfo: {
            username,
            gender,
            year,
            month,
            date,
            interest: { return: false, interest: interest },
            color: { return: true, color: color },
            number: { return: true, number: number },
        },
    });
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
