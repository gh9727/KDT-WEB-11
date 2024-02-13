const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());

// router
// localhost:8000/
const pageRouter = require('./routes/page');
app.use('/', pageRouter);

// localhost:8000/api/visitior/
const visitorRouter = require('./routes/visitior');
app.use('/api/visitior', visitorRouter);

// Error Page
app.get('*', (req, res) => {
    res.status(404).render('404');
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
