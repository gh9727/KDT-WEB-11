const client = require('../model/client');

exports.main = (req, res) => {
    res.render('login');
};

exports.login = (req, res) => {
    const { userId, userPw } = req.body;
    if (client.id === userId && client.pw === userPw) {
        const message = {
            result: true,
            message: '로그인 성공!!!',
        };
        res.send(message);
    } else {
        const message = {
            result: false,
            message: '아이디나 비밀번호를 잘못 입력하셨습니다.',
        };
        res.send(message);
    }
};
