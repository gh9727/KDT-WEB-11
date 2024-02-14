const { Post } = require('../models');
exports.all = async (req, res) => {
    const result = await Post.findAll({ order: [['id', 'DESC']] });
    console.log('all', result);
    res.json({ result: true, data: result });
};

exports.post = async (req, res) => {
    console.log(req.params.id);
    const result = await Post.findOne({ where: { id: req.params.id } });
    console.log('post', result);
    res.json({ result: true, data: result });
};

exports.write = async (req, res) => {
    const { title, content } = req.body;
    const result = await Post.create({
        title,
        content,
    });
    console.log('write', result);
    res.json({ result: true });
};
