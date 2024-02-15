const { User } = require('../models');

//POST
const signup = async (req, res) => {
    const { userid, pw, name } = req.body;
    await User.create({ userid, pw, name });
    res.json({ result: true });
};
//POST
const login = async (req, res) => {
    const { userid, pw } = req.body;
    const result = await User.findOne({ where: { userid, pw } });
    console.log(result);
    if (result !== null) {
        res.json({ result: true, data: result.name });
    } else {
        res.json({ result: false });
    }
};

// 실험 : 회원 유저 조회
//GET
const user = async (req, res) => {
    const result = await User.findAll({});
    console.log(result);
    res.json({ result: true, data: result });
};

const update = async (req, res) => {
    await User.update({ where: {} });
};
module.exports = { signup, login, user };
