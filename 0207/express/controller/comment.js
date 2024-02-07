// 컨트롤러 <-> 라우터 연결

const commentsModel = require('../model/comment.js');

// 방법 1.
// exports.main = (req, res) => {
//     res.render('index');
// };
// exports.comments = (req, res) => {
//     const page = Number(req.params.page);
//     res.render('comment', { data: comments[page - 1] });
// };

// exports.comment = (req, res) => {
//     res.render('comments', { list: comments });
// };

// 방법 2.
const main = (req, res) => {
    res.render('index');
};
const comments = (req, res) => {
    const page = Number(req.params.page);
    res.render('comment', { data: commentsModel[page - 1] });
};
const comment = (req, res) => {
    res.render('comments', { list: commentsModel });
};

module.exports = { main, comments, comment };
