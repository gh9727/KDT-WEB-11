const main = (req, res) => {
    res.render('index');
};

const post = (req, res) => {
    res.render('post');
};

const detail = (req, res) => {
    res.render('detail');
};

const write = (req, res) => {
    res.render('write');
};

const login = (req, res) => {
    res.render('login');
};

const signup = (req, res) => {
    res.render('signup');
};

module.exports = { main, post, detail, write, login, signup };
