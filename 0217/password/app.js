const express = require('express');
const crypto = require('crypto'); // 내장 함수
const bcrypt = require('bcrypt');
const app = express();
const PORT = 8000;

let sign = '';

app.use(express.json());

app.post('/sign', (req, res) => {
    const { pw } = req.body;
    // const sign = createHashedPassword(pw);
    // sign = createPbkdf(pw);
    // sign = cipherEncrypt(pw);
    sign = bcryptPassword(pw);
    res.json({ result: sign });
});

app.post('/verify', (req, res) => {
    const { pw } = req.body;
    // const result = verifyPassword(pw, sign);
    // const result = decipher(sign);
    const result = comparePassword(pw, sign);
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// 단방향 암호화
// 해시함수 + 알고리즘
// createHash(알고리즘).update(암호화할값).digest(인코딩 방식)
const createHashedPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('base64');
};

//pdkdf2함수(비밀번호, 솔트, 반복횟수, 키의길이,알고리즘) 반환은 buffer값 -> 버퍼는 db에 안들어감 + .env 파일에 저장하는게 암호화 유리
const salt = crypto.randomBytes(16).toString('base64'); // 솔트 생성
const iterations = 1000; // 반복횟수
const keylen = 64; // 생성할 키의 길이
const digest = 'sha256'; // 사용할 해시 알고리즘

// 암호화 생성
const createPbkdf = (password) => {
    //pbkdf2함수
    const sign = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
    console.log(sign);
    console.log(salt);
    return sign.toString('base64');
};

// 암호비교
const verifyPassword = (password, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('base64');
    if (compare === dbPassword) {
        return true;
    } else {
        return false;
    }
};

// 양방향
const algorithm = 'aes-256-cbc'; // 256비트 키를 사용, 블록크기 128비트
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); // 초기화 벡터: 보안성 강화

const cipherEncrypt = (word) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv); // 암호화 객체 생성
    let encryptedData = cipher.update(word, 'utf-8', 'base64'); // 데이터 암호화 처리
    encryptedData += cipher.final('base64'); // 암호화한 데이터 최종 결과물 생성
    return encryptedData;
};
// 복호화: 암호화된 데이터를 원상 복구
const decipher = (encryptedData) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv); // 복호화 객체 생성
    let decryptedData = decipher.update(encryptedData, 'base64', 'utf-8');
    decryptedData += decipher.final('utf-8');
    return decryptedData;
};

// bcrypt 모듈 단방향
const saltNumber = 10;
// 암호화
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, saltNumber);
};
// 비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};
