const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('exam');
});

app.get('/axios', (req, res) => {
    console.log(req.query);
    // const { username, usergender, useryear, usermonth, userdate, userinter } = req.query;
    res.send(req.query);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
