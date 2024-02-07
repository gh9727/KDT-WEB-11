const user = require('../model/user.js');

exports.user = (req, res) => {
    res.render('user', { userInfo: user.userInfo() });
};
