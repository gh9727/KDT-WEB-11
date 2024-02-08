const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
// 빼 먹 지 말 것 빼 먹 지 말 것 빼 먹 지 말 것 빼 먹 지 말 것 빼 먹 지 말 것 빼 먹 지 말 것 빼 먹 지 말 것 빼 먹 지 말 것 빼 먹 지 말 것 빼 먹 지 말 것
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router 모듈 불러오기
const loginRouter = require('./routes/login');
app.use('/', loginRouter);

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http:localhost:${PORT}`);
});
