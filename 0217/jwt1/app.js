require('dotenv').config();
const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8030;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

//라우터
//페이지 : 화면만 보이기
const pageRouter = require('./routes/pageRouter');
app.use('/', pageRouter);
//게시판: 게시판 글쓰기 + 게시판 작성글 조회하기
const postRouter = require('./routes/postRouter');
app.use('/api/post', postRouter);
//사용자: 회원가입하기 + 로그인하기 + 사용자 데이터 조회/수정/삭제 하기
const memberRouter = require('./routes/memberRouter');
app.use('/api/member', memberRouter);

//404
app.get('*', (req, res) => {
    res.status(404).render('404');
});

//테이블싱크
//force:true 항상 테이블을 삭제 후 재생성
//force:false(기본값) 테이블이 존재하면 패쓰, 없으면 생성
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
