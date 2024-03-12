const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmember');

// localhost:8000/api/member
router.post('/signup', controller.signup); // 회원가입
router.post('/login', controller.login); // 로그인
router.get('/:id', controller.find); // 회원 조회
router.patch('/update', controller.update); // 회원 정보 수정
router.delete('/delete', controller.delete);

module.exports = router;




// http://localhost:8000/api/member/update
router.patch('/update', controller.update); // 회원 정보 수정
exports.update = async (req, res) => {
    const { id, pw, username, age, email } = req.body;
    const member = await Member.update({ password: pw }, { where: { id } });
    const profile = await Profile.update({ username, age, email }, { where: { id } });
    res.json({ result: true, data: { member, profile }, success: '수정에 성공하였습니다' });
};