const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },

        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const newName = req.body.userId + ext; // 파일명 userId로 변경! req 매개변수 활용! -> 라우터 req 접근방식과 동일함!
            done(null, newName);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});
// path.basename(file.originalname
app.get('/', (req, res) => {
    res.render('register');
});

app.post('/login', upload.single('userfile'), (req, res) => {
    const { userId, userPw, userName, userAge } = req.body;
    const userfile = req.file.path;
    console.log(req.body);
    res.render('client', { userId, userPw, userName, userAge, userfile });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
