const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.main); // 단순 페이지
router.post('/register', controller.register); // 페이지 요청 처리

module.exports = router;
