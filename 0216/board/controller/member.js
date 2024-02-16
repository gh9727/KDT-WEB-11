const { Member, Profile } = require('../models');

//회원가입
exports.signup = async (req, res) => {
    const { userId, pw, username, age, email } = req.body;
    //존재여부확인
    const find = await Member.findOne({ where: { userId } });
    console.log('find', find);

    if (find) {
        res.json({ success: false, message: '이미존재하는 회원' });
    } else {
        //생성 create
        const result = await Member.create({ userId, password: pw });
        console.log('signup', result);
        const result2 = await Profile.create({ username, age, email, memberId: result.id });
        console.log('profile', result2);
        res.json({ success: true });
    }
};
//로그인
exports.login = async (req, res) => {
    const { userId, pw, save } = req.body;
    const SAVEID = 'saveId';
    //검색 findOne
    const result = await Member.findOne({ where: { userId, password: pw } });
    console.log('login', result);
    if (result) {
        req.session.member = result;
        if (save === 'save') {
            res.cookie(SAVEID, result.id, { maxAge: 60 * 10000, httpOnly: true });
        } else {
            res.clearCookie(SAVEID);
        }
        res.json({ success: true, result: result });
    } else {
        res.json({ success: false });
    }
};
//회원조회
exports.info = async (req, res) => {
    const { id } = req.session.member;
    //findByPk
    //const find = await Member.findOne({ where: { id } });
    const result = await Member.findByPk(id, {
        attributes: ['userId', 'password'],
        include: [{ model: Profile, attributes: ['username', 'age', 'email'] }],
    });
    console.log('result', result);
    res.json({ success: true, result: result });
};
//정보수정
exports.update = async (req, res) => {
    const { pw, username, age, email } = req.body;
    const { id } = req.session.member;
    const result = await Member.update({ password: pw }, { where: { id } });
    const result2 = await Profile.update({ username, age, email }, { where: { memberId: id } });
    console.log('update', result);
    res.json({ success: true });
};
//회원탈퇴
exports.delete = async (req, res) => {
    const { id } = req.body;
    const result = await Member.destroy({ where: { id } });
    console.log('delete', result);
    res.json({ success: true });
};

exports.logout = (req, res) => {
    if (req.session.member) {
        req.session.destroy(() => {
            res.json({ success: true });
        });
    } else {
        res.json({ success: false, message: '로그인상태가 아닙니다' });
    }
};
exports.getCookie = (req, res) => {
    res.json({ result: req.cookies });
};
