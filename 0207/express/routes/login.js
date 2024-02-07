const express = require('express');
const router = express.Router();
const controller = require('../controller/login.js');

router.get('/', controller.main);
// post 실수
router.post('/', controller.login);

module.exports = router;
