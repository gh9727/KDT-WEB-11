const login = require('../model/login.js');

exports.main = (req, res) => {
    res.render('login');
};

exports.login = (req, res) => {
    const { userId, userPw } = req.body;
    // 모듈 객체 접근 실수!!!!!!!!!
    console.log(req.body);
    // console.log(login.pw);
    if (login.id === userId && login.pw === userPw) {
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
};
