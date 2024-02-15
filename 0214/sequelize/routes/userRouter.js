const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// localhost:8000/api/login
router.post('/signup', controller.signup);
router.post('/login', controller.login);

router.patch('/update', controller.update);
router.delete('/delete', controller.del);

// 실험 : 유저 데이터 조회
router.get('/user', controller.user);
module.exports = router;
