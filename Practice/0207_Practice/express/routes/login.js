const express = require('express');
const controller = require('../controller/index'); // require : index 파일 생략 가능!
const router = express.Router();

router.get('/', controller.main);
router.post('/login', controller.login);

module.exports = router;
