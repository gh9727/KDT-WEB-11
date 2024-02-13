exports.mainPage = async (req, res) => {
    res.render('main');
};

exports.registerPage = async (req, res) => {
    res.render('register');
};

exports.editPage = async (req, res) => {
    const { userid } = req.session.user || {}; // 세션에 저장된 유저 데이터
    console.log(userid);
    res.render('edit', { userid });
};

exports.deletePage = async (req, res) => {
    res.render('delete');
};
