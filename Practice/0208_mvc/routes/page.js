const express = require('express');
const controller = require('../controller/Cpage');
const router = express.Router();

// 기본 페이지
router.get('/', controller.main);
// 방명록 페이지
router.get('/visitior', controller.visitior);

module.exports = router;
