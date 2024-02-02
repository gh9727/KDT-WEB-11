// express 모듈
const express = require('express');
const app = express();
const PORT = 8000;

// 미들웨어 : body-parser(폼 전송)
app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded 방식
app.use(express.json()); // json 방식

// 미들웨어 : view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router(페이지(서버) 주소 넣기)
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/getForm', (req, res) => {
    // get 방식으로 프론트 데이터 받기
    console.log(req.query);
    res.render('result', { title: 'GET 요청 결과', userinfo: req.query });
});

// 도메인 아니다
app.get('/exam', (req, res) => {
    res.render('exam'); // 페이지 열기
});

app.get('/exam_getForm', (req, res) => {
    const { name, gender, year, month, day, interest, color, num } = req.query;
    res.render('exam_result', {
        title: ' GET 요청결과',
        userinfo: {
            name,
            gender,
            year,
            month,
            day,
            interest,
            // key 값과 value의 "변수" 값이 같다면 value를 생략해도 된다.
            color: { result: false, color: color },
            num: { result: false, num: num },
        },
    }); // 데이터 정보 전달 받기 // 데이터 정보 전달 받기
});

app.post('/exam_postForm', (req, res) => {
    const { name, gender, year, month, day, interest, color, num } = req.body;
    res.render('exam_result', {
        title: ' POST 요청결과',
        userinfo: {
            name,
            gender,
            year,
            month,
            day,
            interest,
            color: { result: true, color: color },
            num: { result: true, num: num },
        },
    }); // 데이터 정보 전달 받기
});

app.post('/postForm', (req, res) => {
    // post 방식으로 프론트 데이터 받기
    console.log(req.body);
    res.render('result', { title: ' POST 요청결과', userinfo: req.body });
});

// use는 http 전송 방식을 이해하지 못함
// 같은 라우터(url)로 get, post를 만들 수 있지만, use로는 접근이 불가능
// get 방식의 '/login' 과 post 방식의 '/login'은 다른 통신이지만,
// use는 두 방식 모두 같은 통신으로 인식함 → 404 페이지일때 주로 사용
app.use('*', (req, res) => {
    res.render('notFound');
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
