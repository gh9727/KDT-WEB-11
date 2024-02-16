const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

/* 세션 옵션 객체
 * httpOnly: httpOnly: 웹 서버를 통해서만 쿠키에 접근 가능
 * secure: https에서만 세션을 주고받음
 * secret: 세션을 암호화하기 위한 비밀키
 * resave: 세션을 항상 저장할 건지 지정(보통 false 권장)
 → 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할 것인지 지정
 → 일반적으로 수정사항이 생길때만 저장하는게 좋음
 * saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할 지 설정(true 권장)
 → 초기화 되지 않는 세션을 스토어에 저장할 지 설정 → String str = null 느낌
 * cookie 객체
 */
app.use(
    session({
        secret: 'mySession',
        resave: false,
        saveUninitialized: true,
    })
);
app.get('/', (req, res) => {
    // req.session.name = '홍길동';
    req.session.user = { id: 1, username: '홍길동' };
    res.send('세션 설정');
});
app.get('/getSession', (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.send('사용자가 존재하지 않습니다');
    }
});
app.get('/destroy', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send(err);
        } else {
            res.send('세션 삭제 완료');
        }
    });
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
