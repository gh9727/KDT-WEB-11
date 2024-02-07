const express = require('express');
const router = express.Router(); // Router 가져오기
const controller = require('../controller/comment.js'); // 내가 작성한 컨트롤러 라우터 모듈 불러오기

// router
router.get('/', controller.main);

router.get('/comments', controller.comment);

router.get('/comment/:page', controller.comments);

// router 모듈 exports
module.exports = router;
