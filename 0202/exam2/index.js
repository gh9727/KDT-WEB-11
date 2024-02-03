const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const client_id = 'Wale';
const client_pw = 'abcd1234!';

app.get('/', (req, res) => {
    res.render('login');
});

// 회원가입 페이지 입력 정보 → 로그인 서버 전송
app.post('/login', (req, res) => {
    const { userId, userPw } = req.body;
    if (client_id === userId && client_pw === userPw) {
        const message = {
            success: {
                result: true,
                message: '로그인 성공',
            },
            fail: { result: false },
        };
        res.send(message);
    } else {
        const message = {
            success: { result: false },
            fail: { result: true, message: '아이디 또는 비밀번호를 잘못 입력하셨습니다' },
        };
        res.send(message);
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
