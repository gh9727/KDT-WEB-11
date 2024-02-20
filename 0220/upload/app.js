const express = require('express');
const aws = require('aws-sdk'); // aws 설정을 위한 모듈
const multer = require('multer');
const multerS3 = require('multer-s3'); // aws s3에 파일 업로드하기 multer 설정 모듈
const app = express();
const PORT = 8000;

// aws 설정
aws.config.update({
    accessKeyId: 'AKIA4MTWKOWQLWCMVAHV', // 엑세스키
    secretAccessKey: 'MYkvJ/lkjcVBqV5ihSm5ltOR/Bzk2Ky+zWt5IwSM', // 엑세스 비밀번호
    region: 'ap-northeast-2',
});
// aws s3 인스턴스 생성
const s3 = new aws.S3();

// multer 설정
const upload = multer({
    storage: multerS3({
        s3, // 코드 고정
        bucket: 'kdt11-wale', // 내 버킷 이름 복붙
        acl: 'public-read', // 파일접근권한 : public으로 해야 업로드된 파일이 공개됨
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});

// 미들웨어
app.set('view engine', 'ejs');

// router : page
app.get('/', (req, res) => {
    res.render('index');
});

// router : api
app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.get;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
