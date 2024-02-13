const express = require('express');
const router = express.Router();
const controller = require('../controller/Cpage');

// 메인 페이지 : localhost:8000
router.get('/', controller.mainPage);

// 회원가입 페이지 : localhost:8000/register
router.get('/register', controller.registerPage);

// 회원 정보 수정 페이지 : localhost:8000/edit
router.get('/edit', controller.editPage);

// 회원 탈퇴 페이지 : localhost:8000/delete
router.get('/delete', controller.deletePage);

module.exports = router;
