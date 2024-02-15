const { Post, Comment } = require('../models');

//전체글 조회
exports.all = async (req, res) => {
    // Post.findAll().then((result) => {
    //     console.log('all', result);
    // });
    const result = await Post.findAll({ order: [['id', 'desc']] });
    console.log('all', result);
    res.json({ result: true, data: result });
};
//하나 조회
exports.post = async (req, res) => {
    console.log(req.params.id);
    // const result = await Post.findOne({ where: { id: req.params.id } });
    const result = await Post.findByPk(req.params.id, { include: [{ model: Comment }] });
    res.json({ result: true, data: result });
};
//하나 생성
exports.write = async (req, res) => {
    const { title, content } = req.body;
    const result = await Post.create({
        title,
        content,
    });
    console.log('write', result);
    res.json({ result: true, data: result.id });
};
//하나 수정
exports.update = async (req, res) => {
    const { id, title, content } = req.body;
    const result = await Post.update(
        {
            title,
            content,
        },
        { where: { id } }
    );
    console.log('update', result);
    res.json({ result: true });
};
//하나 삭제
exports.delete = async (req, res) => {
    const result = await Post.destroy({ where: { id: req.body.id } });
    console.log('delete', result);
    res.json({ result: true });
};

exports.comment = async (req, res) => {
    const { id, content } = req.body;
    const result = await Comment.create({ content: content, postId: id });
    console.log('comment', result);
    res.json({ result: true });
};

// include : 쿼리를 실행할때 관련된 모델의 데이터도 함께 조회할 수 있는 옵션