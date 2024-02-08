const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());

// 생성 조회 수정 삭제(C R U D) => 페이지 요청 OR 데이터 처리 : 2중1택

// 페이지 라우터
// localhost:8000/
const pageRouter = require('./routes/page');
app.use('/', pageRouter);

// 데이터 처리 라우터
// localhost:8000/api/visitor
const visitorRouter = require('./routes/visitor');
app.use('/api/visitor', visitorRouter);

app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
