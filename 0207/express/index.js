require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// 해당 폴더의 /index.js 는 생략 가능!!! , comment.js 는 생략 불가능 !!!!
// const router = require('./routes/index.js'); // 내가 작성한 router 모듈 불러오기 + js 생략가능
const router = require('./routes'); // ./ 로 써야함
app.use('/', router);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const loginRouter = require('./routes/login.js');
app.use('/login', loginRouter);

// 오류처리
app.get('*', (req, res) => {
    res.status(404).render(404);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
