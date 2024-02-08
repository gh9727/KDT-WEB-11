const Users = require('../model/user');

exports.main = (req, res) => {
    res.render('index', { users: Users });
};

exports.register = (req, res) => {
    const { name, gender, major } = req.body;
    Users.push({
        id: Users.length + 1,
        name,
        gender,
        major,
    });
    res.send({ result: true });
};
