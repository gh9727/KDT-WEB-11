const express = require('express');
const controller = require('../controller/Cvisitior');
const router = express.Router();

// Default : localhost:8000/api/visitior/
router.get('/', controller.all);

router.post('/write', controller.write); // localhost:8000/api/visitor/write

router.patch('/edit', controller.edit); // localhost:8000/api/visitor/edit

router.delete('/delete', controller.delete); // localhost:8000/api/visitor/delete
module.exports = router;
