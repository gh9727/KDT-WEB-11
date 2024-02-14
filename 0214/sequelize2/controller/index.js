const main = (req, res) => {
    res.render('index');
};
const post = (req, res) => {
    res.render('post');
};
module.exports = { main, post };
