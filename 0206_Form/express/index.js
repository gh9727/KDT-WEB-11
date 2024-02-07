const express = require('express');
const app = express();
const PORT = 8000;

// 미들웨어 : view engine
app.set('view engine', 'ejs');
// 미들웨어 : body-parser
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('form');
});

app.get('/get_result', (req, res) => {
    res.render('result', { title: 'Get 요청 성공!', id: req.query.id, pw: req.query.pw });
});
app.post('/post_result', (req, res) => {
    res.render('result', { title: 'POST 요청 성공!', id: req.body.id, pw: req.body.pw });
});

app.listen(PORT, () => {
    console.log(`http:localhost:${PORT}`);
});
