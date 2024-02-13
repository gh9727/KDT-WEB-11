const Mvisitior = require('../model/Mvisitior');
// 화면에 데이터를 전달만할것이기 때문에 req.query를 사용할 이유가 없다.
exports.all = async (req, res) => {
    const data = await Mvisitior.allVisitor();
    // console.log(data);
    res.json({ result: data });
};

exports.write = async (req, res) => {
    const data = await Mvisitior.write(req.body);
    // console.log(req.body);
    console.log(data);
    res.json({ result: true, id: data.insertId, name: req.body.name, comment: req.body.comment });
};

exports.edit = async (req, res) => {
    const data = await Mvisitior.edit(req.body);
    console.log(data);
    res.json({ result: true });
};

exports.delete = async (req, res) => {
    const data = await Mvisitior.deleteVisitor(req.body.id);
    res.json({ result: true });
};

// 틀린 부분
/*
 * 1. res.json() 메서드는 객체값으로 전달한다.
 */
