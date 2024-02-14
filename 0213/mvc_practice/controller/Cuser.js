const User = require('../model/Muser');
const { Member } = require('../models');
const { Op } = require('sequelize');

// ORM 메서드는 객체형태
// findOne() : 데이터 하나 검색 : where 필요 + 하나의 객체로 전송됨
// findOne() → where : 원하는 데이터를 추출하기 위한 조건문
// findeAll() : 모든 데이터 검색 : where 선택 + 배열 형태로 전송됨
// findeAll() → attributes : 원하는 컬럼을 조회 + 배열 형태로 작성

//회원가입
exports.signup = async (req, res) => {
    console.log(req.body);

    const { id: userid, pw, username: name } = req.body;
    Member.create({ userid, pw, name }).then(() => {
        res.json({ result: true });
    });
};

//로그인
exports.Clogin = async (req, res) => {
    // 배열로 오지 않음
    const { id, pw } = req.body;
    Member.findOne({ where: { userid: id, pw } }).then((result) => {
        if (result !== null) {
            res.json({ result: true, message: '로그인 성공', id: result.id });
        } else {
            res.json({ result: false, message: '로그인 실패', id: null });
        }
    });
};
//회원정보 조회
exports.Cinfo = async (req, res) => {
    Member.findOne({ where: { id: req.params.id } }).then((result) => {
        if (result !== null) {
            res.json({ result: true, info: result, message: '회원존재' });
        } else {
            res.json({ result: false, info: null, message: '존재하는 회원없음' });
        }
    });
};
//회원정보 수정
exports.Cupdate = async (req, res) => {
    const { id, username, pw } = req.body;
    Member.update({ username, pw }, { where: { id } }).then((result) => {
        res.json({ result: true });
    });
};
//회원정보 삭제
exports.Cdelete = async (req, res) => {
    Member.destroy({ where: { id: req.body.id } }).then((result) => {
        res.json({ result: true });
    });
};

// 회원정보 전체 조회
exports.Call = async (req, res) => {
    Member.findAll({
        attributes: ['id', 'username', 'userid'],
        //Op.gt(초과) + Op.gte(이상) + Op.lt(미만) + Op.lte(이하)
        //Op.or(또는) + Op.ne(같지 않음) + Op.in(배열 요소 중 하나) + Op.notIN(배열요소와 모두다름)
        where: { id: { [Op.lt]: 4 } },
        order: [['id', 'DESC']],
        limit: 2,
        offset: 1,
    }).then((result) => {
        console.log(result);
        res.json({ result });
    });
};
//회원정보 전체
// exports.Call = async (req, res) => {
//     Member.findAll({
//         //attributes: 원하는 컬럼 조회
//         attributes: ['id', 'username', 'userid'],
//         //Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.lte(이하)
//         //Op.or(또는), Op.ne(같지않음), Op.in(배열 요소중 하나), Op.notIn(배열요소와 모두다름)
//         where: { id: { [Op.lte]: 5 } },
//         order: [['id', 'DESC']],
//         limit: 2,
//         offset: 2,
//     }).then((result) => {
//         console.log(result);
//         res.json({ result });
//     });
// };
