require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// 임시 DB
const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2024-02-01',
        comments: '안녕하세요',
    },
    {
        id: 2,
        userid: 'happy',
        date: '2024-01-03',
        comments: '반갑습니다',
    },
    {
        id: 3,
        userid: 'lucky',
        date: '2024-02-05',
        comments: '행복하세요',
    },
    {
        id: 4,
        userid: 'fail',
        date: '2024-02-07',
        comments: '축구망했다',
    },
];

// router
app.get('/', (req, res) => {
    res.render('index');
    // console.log('hi');
    // console.log(process.env.KDT);
    // console.log(process.env.NAME);
    // console.log(process.env.NODE_ENV);
    // if (process.env.NODE_ENV === 'production') {
    //     console.log('라이브 서버 입니다.');
    // } else if (process.env.NODE_ENV === 'development') {
    //     console.log('개발용 서버 입니다.');
    // }
});

app.get('/comments', (req, res) => {
    res.render('comments', { list: comments });
});
// comments 상세 페이지 + 페이지 인덱싱 {page : "값"} 형태 : (콜론)붙여야함!!!
app.get('/comment/:page', (req, res) => {
    const page = Number(req.params.page); // 페이지 넘버는 형변환 해주기
    res.render('comment', { data: comments[page - 1] }); // comments 배열 요소 접근
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
