const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = 'jwt-secret';
app.use(express.json());

app.post('/sign', (req, res) => {
    const { id } = req.body;
    // jwt 토큰 생성
    const token = jwt.sign({ id }, SECRET);
    res.json({ success: true, token });
});

app.post('/verify', (req, res) => {
    const auth = req.headers.authorization;
    console.log(auth);
    const [bearer, token] = auth.split(' ');
    console.log(token);
    // verify : token 과 SECRET을 비교
    if (bearer === 'Bearer') {
        jwt.verify(token, SECRET, (err, decode) => {
            if (err) {
                return res.status(403).json({ success: false, message: '검증에 실패' });
            } else {
                res.json({ success: true, result: decode });
            }
        });
    } else {
        res.json({ success: false, message: '올바른 프로토콜이 아닙니다' });
    }
});
app.listen(8000, () => {
    console.log(`http://localhost:${PORT}`);
});
