const express = require('express');
const controller = require('../controller/post');
const router = express.Router();

// localhost:/api/post
router.get('/all', controller.all);
router.get('/:id', controller.post); // 밑에 써야함
router.post('/write', controller.write);
// router.patch('/update', controller.update);
// router.delete('/delete', controller.delete);
module.exports = router;
