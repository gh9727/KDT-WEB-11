const visitor = require('../model/Visitor');

// 모든 방명록 조회
exports.allVisitor = async (req, res) => {
    const data = await visitor.allVisitor();
    console.log(data);
    res.json({ result: data });
};

// 방명록 한개 조회
exports.getVisitor = async (req, res) => {
    const data = await visitor.getVisitor(req.params.id);
    console.log(data);
    res.json({ result: data });
};
// 방명록 한개 작성
exports.postVisitor = async (req, res) => {
    console.log(req.body);
    const data = await visitor.postVisitor(req.body);
    console.log(data);
    // insertId : 인덱스 번호 1,2,3 ..
    res.json({ result: true, id: data.insertId, name: req.body.name, comment: req.body.comment });
};
// 방명록 한개 수정
exports.patchVisitor = async (req, res) => {
    const data = await visitor.patchVisitor(req.body);
    // 성공 or 실패 했는지만 출력해줌
    console.log(data);
    res.json({ result: true });
};
// 방명록 한개 삭제
exports.deleteVisitor = async (req, res) => {
    const data = await visitor.deleteVisitor(req.body.id);
    console.log(data);
    res.json({ result: true });
};
