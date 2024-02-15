const express = require('express');
const router = express.Router();
const controller = require('../controller/Cpage');

// localhost:8000
router.get('/', controller.main); // 메인 페이지
router.get('/post', controller.post); // 게시판 페이지
router.get('/post:id', controller.detail); // 상세 페이지
router.get('/write', controller.write); // 글쓰기 페이지

router.get('/login', controller.login); // 로그인 페이지
router.get('/signup', controller.signup); // 회원가입 페이지
module.exports = router;
