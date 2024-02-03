const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use('/uploads', express.static(__dirname + '/uploads'));

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },

        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newName);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

app.get('/', (req, res) => {
    res.render('register');
});

app.post('/login', upload.single('userfile'), (req, res) => {
    const { userId, userPw, userName, userAge } = req.body;
    // 객체의 구조에 접근 : 구조 분해 할당
    // 객체의 key에 접근 : 변수 할당
    const userfile = req.file.path;
    res.render('client', { userId, userPw, userName, userAge, userfile });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
