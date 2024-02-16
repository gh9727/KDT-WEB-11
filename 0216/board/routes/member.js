const express = require('express');
const controller = require('../controller/member');

const router = express.Router();
// 미들웨어

// 401 : 인증되지 않았을 때 뿌리는 상태 코드
//POST /signup 회원가입
router.post('/signup', controller.signup);
//POST /login 로그인
router.post('/login', controller.login);
//GET /:id 회원조회
router.get('/info', controller.info);
//PATCH /update 정보수정
router.patch('/update', controller.update);
//DELETE /delete 회원탈퇴
router.delete('/delete', controller.delete);

router.get('/logout', controller.logout);

router.get('/getCookie', controller.getCookie);
module.exports = router;
