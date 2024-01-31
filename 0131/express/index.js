// 기본적인 express 서버 생성 코드
const express = require('express'); // express 모듈 불러오기
const app = express(); // express 제공 함수
const PORT = 8000; // 포트 번호

app.set('view engine', 'ejs'); // 뷰 엔진으로 ejs 사용 XXX
app.set('views', './views'); // views는 views 폴더안에 존재 XXX

// 정적 파일 불러오기 : 미들웨어
app.use('/public', express.static(__dirname + '/public'));

// localhost:8000 서버 생성 → 8000/abc 로 쓸 수 있는데 abc가 없으면 / 생략됨
app.get('/', (req, res) => {
    // send() : 클라이언트에 응답 데이터를 보낼 때
    res.send('Hello Express');
});

app.get('/kdt', (req, res) => {
    // render('파일명', 객체명) : 뷰 엔진 랜더링 + .ejs 생략가능(app.set() 덕분)
    // 서버에서 클라(뷰)로 데이터(객체) 전달하기 → 객체만을 제공함(변수명 일치)
    res.render('test', { name: '홍길동' }); // XXX
});

app.get('/gugu', (req, res) => {
    res.render('gugudan', { data: 2, dan: 5, leng: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
});

app.get('/fruits', (req, res) => {
    res.render('fruits', {
        fruits: [
            { name: 'apple', kor: '사과' },
            { name: 'banana', kor: '바나나' },
            { name: 'grapes', kor: '포도' },
            { name: 'peaches', kor: '복숭아' },
        ],
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
