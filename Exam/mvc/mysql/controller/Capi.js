const Mapi = require('../model/Mapi');
exports.login = async (req, res) => {
    const { userid, pw } = req.body;
    req.session.user = { userid: userid, pw: pw }; // 세션에 유저 데이터 저장
    const data = await Mapi.login();
    for (let i = 0; i < data.length; i++) {
        if (userid === data[i].userid && pw === data[i].pw) {
            res.json({ result: true, userid });
            return;
        }
    }
    res.json({ result: false });
};
exports.register = async (req, res) => {
    const { userid, pw, name } = req.body;
    await Mapi.register(userid, pw, name);
    res.json({ result: true });
};

exports.info = async (req, res) => {};

exports.editId = async (req, res) => {
    const { userid: uid, pw: upw } = req.session.user || {}; // 세션에 저장된 유저 데이터
    const newid = req.body.userid;
    await Mapi.editId(newid, upw); // userid: 사용자 수정 아이디, pw : 기존 비밀번호
    res.json({ result: true });
};
exports.editPw = async (req, res) => {
    const { userid: uid, pw: upw } = req.session.user || {}; // 세션에 저장된 유저 데이터
    const newPw = req.body.pw;
    await Mapi.editPw(uid, newPw); // userid: 사용자 수정 아이디, pw : 기존 비밀번호
    res.json({ result: true });
};
exports.deleteUser = async (req, res) => {
    const { userid: uid, pw: upw } = req.session.user || {}; // 세션에 저장된 유저 데이터
    const { userid, pw } = req.body;
    if (uid === userid && upw === pw) {
        await Mapi.deleteUser(uid);
        res.json({ result: true });
    } else {
        res.json({ result: false });
    }
};
