const express = require('express');
const router = express.Router();
const controller = require('../controller/user.js');

router.get('/', controller.user);

module.exports = router;
