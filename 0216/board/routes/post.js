const express = require('express');
const controller = require('../controller/post');

const router = express.Router();
// 사용자 인증했을 시 에만 게시판 접속
const isAuth = (req, res, next) => {
    // next(): express 미들웨어에서 다음 미들웨어로 제어를 전달하는 역할
    if (req.session && req.session.member) {
        next(); // 다음 미들웨어로 넘어가게 해줌
    } else {
        res.status(401).json({ success: false, message: '인증되지 않은 사용자입니다' });
    }
};
//GET /all 전체글 조회
router.get('/all', isAuth, controller.all);
//GET /post/:id 게시판글 하나 조회
router.get('/:id', isAuth, controller.post);
//POST /write 게시판 글 하나 생성
router.post('/write', isAuth, controller.write);
//PATCH /update 게시판 글 하나 수정
router.patch('/update', isAuth, controller.update);
//DELETE /delete 게시판 글 하나 삭제
router.delete('/delete', isAuth, controller.delete);
//POST /comment 댓글 생성
router.post('/comment', isAuth, controller.comment);

module.exports = router;
