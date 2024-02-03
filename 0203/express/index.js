const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// 정적파일 설정
// 폴더 경로 , 폴더 실제 주소 : http://localhost:8000/uploads/파일명
// 실수 : express.static(__dirname + 주소)  <-> 나는 (__dirname) + 주소
app.use('/uploads', express.static(__dirname + '/uploads'));

// multer
const upload = multer({
    // dest : 프론트 페이지지에서 업로드할 파일을 저장할 폴더 경로 지정
    dest: '/uploads',
});

// multer 세부 설정
const uploadDetail = multer({
    // storage: 저장할 공간에 대한 정보
    // diskStorage(파일 저장관련 설정) : 파일을 저장하기 위해 모든 제어기능을 제공해주는 메서드
    storage: multer.diskStorage({
        // dest 동일 : 업로드할 파일을 저장할 폴더 지정
        destination(req, file, done) {
            // done(에러 처리, 폴더 경로)
            done(null, 'uploads/');
        },
        // 파일 이름 결정 (요청 객체, 업로드된 파일 객체, 콜백함수)
        filename(req, file, done) {
            // extname() : 확장자 추출
            const ext = path.extname(file.originalname);
            // basename(파일 오리지널명, 확장자) : 파일이름 추출
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newName);
        },
    }),
    // limits : 파일 용량 제한
    limits: { fileSize: 5 * 1024 * 1024 },
});

/*
// multer 세부 설정 vol.2
const storage = multer.diskStorage({
    const destination = (req,file ,done) => {}
    destination: (req, file, done) => {
        // done(에러 처리, 폴더 경로)
        done(null, 'uploads/');
    },
    filename: (req, file, done) => {
        // extname() : 확장자 추출
        const ext = path.extname(file.originalname);
        // basename(파일 오리지널명, 확장자) : 파일이름 추출
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        done(null, newName);
    },
});
const limits = {
    fileSize: 5 * 1024 * 1024,
};
const uploadDetail2 = multer({
    storage,
    limits,
});
*/
// router → 프론트 페이지
app.get('/', (req, res) => {
    res.render('index');
});

// 하나의 파일 업로드 : signle('input 태그 name 속성값')
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    // 파일 받기 : req.file
    console.log(req.file);
    console.log(req.body);
});
// 여러 파일 업로드(ver1) : array('속성값', 파일 최대 개수)
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
    // 파일 받기 : req.files
    console.log(req.files);
    console.log(req.body);
});
// 여러 파일 업로드(ver2) : field([{name: 속성값},{name : 속성값}...]) : 객체 배열
app.post('/upload/fields', uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]), (req, res) => {
    console.log(req.files);
    console.log(req.body);
});

// 동적 폼 서버 처리
app.post('/upload/axios', uploadDetail.single('file'), (req, res) => {
    res.send({ file: req.file, title: req.body });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
