const express = require('express');
const router = express.Router();
const controller = require('../controller/Cpost');

// localhost:8000/api/post
router.get('/all', controller.all); // 전체 목록 데이터 조회
router.get('/:id', controller.detail); // 상세 페이지 데이터 조회
router.post('/write', controller.write); // 글쓰기 데이터 전송
router.patch('/update', controller.update); // 글 수정 데이터 전송
router.delete('/delete', controller.del); // 글 삭제 데이터 전송

module.exports = router;
