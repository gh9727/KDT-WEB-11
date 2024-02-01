const express = require('express');
const app = express();
const PORT = 8000;

// 템플릿 엔진 ejs 세팅
app.set('view engine', 'ejs');
app.set('views', './views');

// 미들웨어 세팅 : static 메서드 사용
app.use('/public', express.static(__dirname + '/public'));

// 서버 생성
app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>');
});

// ejs 파일 연동하기 + 값 전달하기
app.get('/test', (req, res) => {
    // 값 전달 : 객체 배열
    res.render('test', {
        lists: [{ list: '1번' }, { list: '2번' }, { list: '3번' }],
        classes: [{ class: 'li1' }, { class: 'li2' }, { class: 'li3' }],
    });
});

// 서버 열기
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
