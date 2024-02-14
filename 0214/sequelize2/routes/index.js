const express = require('express');
const { main, post } = require('../controller');
const router = express.Router();

router.get('/', main);
router.get('/post', post);
module.exports = router;
