// 클라 서버 통신을 위한 express 모듈 불러오기
const express = require('express');
// 프론트 페이지 파일(이미지, 동영상) 처리 모듈
const multer = require('multer');
const path = require('path');
// 웹 애플리케이션
const app = express();
const PORT = 8000;

// 미들웨어 : 백엔드 <-> ejs 프론트 페이지 연결
app.set('view engine', 'ejs');

// 정적 파일 생성(app.use () + express.static()) -> 파일 처리를 위한 폴더 역할
app.use('/uploads', express.static(__dirname + '/uploads'));

// 이미지 upload 처리
const upload = multer({
    storage: multer.diskStorage({
        // 업로드된 파일 저장할 폴더 설정
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        // 중복 파일명 방지 처리
        filename(req, file, done) {
            const ext = path.extname(file.originalname); // 업로드된 파일의 확장자
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newName);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 파일 용량 제한(5GB)
});

app.get('/', (req, res) => {
    res.render('register');
});

// upload.single('userfile') // 매개변수 : 'input name 속성값'
app.post('/fileUpload', upload.single('userfile'), (req, res) => {
    // console.log(req.body) // req.body : 파일 데이터 처리 못함!
    console.log(req.file);
    res.send(req.file);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
