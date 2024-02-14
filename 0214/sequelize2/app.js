const express = require('express');
const db = require('./models'); // models/index.js + 에러 발생
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());

// router
const indexRouter = require('./routes');
app.use('/', indexRouter);
const postRouter = require('./routes/post');
app.use('/api/post', postRouter);

// 에러 페이지
app.get('*', (req, res) => {
    res.status(404).render('404');
});

// 서버 실행 + Table 싱크(동기화)
/* sync() 매개변수
 * force:true ☞ 항상 테이블을 삭제 후 생성 + 개발 초기 단계
 * force:false ☞ Default, 테이블이 존재하면 패스, 없다면 생성 + 개발 중반 단계
 */
// db.sequelize.sync({ force: true }).then(() => {});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
