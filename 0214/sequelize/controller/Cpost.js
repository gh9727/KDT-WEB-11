const { Post } = require('../models');

const all = async (req, res) => {
    const result = await Post.findAll(); // 얘 배열형태로 반환한다
    console.log(result);
    res.json({ result: true, data: result });
};

const detail = async (req, res) => {
    const result = await Post.findOne({ where: { id: req.params.id } });
    console.log(result.title);
    res.json({ result: true, title: result.title, content: result.content });
};

const write = async (req, res) => {
    const { title, content } = req.body;
    console.log(title, content);
    const result = await Post.create({
        title,
        content,
    });
    res.json({ result: true });
};
const update = async (req, res) => {
    const { id, title, content } = req.body;
    await Post.update({ title, content }, { where: { id } });
    res.json({ result: true });
};

const del = async (req, res) => {
    const id = req.body.id;
    await Post.destroy({ where: { id } });
    res.json({ result: true });
};
module.exports = { all, write, detail, update, del };
