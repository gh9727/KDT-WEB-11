const { Member, Profile } = require('../models');

exports.signup = async (req, res) => {
    const { userId, pw, username, age, email } = req.body;
    // 존재 여부 확인
    const find = await Member.findOne({ where: { userId } });
    if (find) {
        console.log(find);
        res.json({ result: false, msg: '이미 존재하는 회원' });
    } else {
        // 버그 = username : username 하고 보내기
        const result = await Member.create({ userId, password: pw });
        console.log('signup', result);
        const result2 = await Profile.create({ username, age, email, memberId: result.id });
        console.log('profile', result2);
        res.json({ result: true });
    }
};

exports.login = async (req, res) => {
    const { userId, pw } = req.body;
    const result = await Member.findOne({ where: { userId: userId, password: pw } });
    console.log('login', result);
    if (result) {
        res.json({ result: true, data: result });
    } else {
        res.json({ result: false });
    }
};

exports.find = async (req, res) => {
    const { id } = req.params;
    // const result = await Member.findOne({ where: { id } });
    // const result2 = await Member.findByPk(id, {
    //     attribute: ['userId', 'password'],
    //     include: [{ model: Profile, attributes: ['username', 'age', 'email'] }],
    // }); // 페이지 조회 시 사용
    // console.log('find', result2);
    // res.json({ result: true, data: result2 });

    const result = await Member.findByPk(id, {
        attributes: ['userId'],
        include: [{ model: Profile, attributes: ['username', 'age', 'email'] }],
    });
    console.log('result', result);
    res.json({ result: true, data: result });
};

// 포스트맨 문자열 : Number() 로 숫자형변환
// 포스트맨 숫자형 : 그냥 받아주기
// 왜? : DB의 id 컬럼 속성이 숫자형이라서
exports.update = async (req, res) => {
    const { id, pw } = req.body;
    const result = await Member.update({ password: pw }, { where: { id } });
    console.log('update', result);
    res.json({ result: true });
};
exports.delete = async (req, res) => {
    const { id } = req.body;
    const result = await Member.destroy({ where: { id: Number(id) } });
    console.log('delete', result);
    res.json({ result: true });
};
