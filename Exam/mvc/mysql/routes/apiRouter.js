const express = require('express');
const router = express.Router();
const controller = require('../controller/Capi');

// Default : localhost:8000/api
router.post('/login', controller.login); // 로그인
router.post('/register', controller.register); // 회원 가입

// router.get('/info', controller.info);

router.patch('/editId', controller.editId); // 아이디 수정
router.patch('/editPw', controller.editPw); // 비밀번호 수정

router.delete('/delete', controller.deleteUser); // 회원 탈퇴

module.exports = router;
