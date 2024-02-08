const mysql = require('mysql2/promise');
// mysql 연결
const getConn = async () => {
    // 단일 접속,연결 -> 연결끊기면 직접 연결 끊어줘야함
    return await mysql.createConnection({
        host: 'localhost', // mysql 주소
        user: 'Wale', // mysql 계정 이름
        password: 's99h123k123!', // mysql 비번
        database: 'kdtdb', // DB 이름
        port: 3306,
    });
};

// 문자열 보간 방법
// `SELECT * FROM visitor WHERE id = ${id} `
// 단점
/*
 * 1. SQL 인젝션(아무값 대입) 공격에 취약
 * 2. 문자열에 특수문자가 포함될 경우 오류 발생 가능성
 * 보간 방법 : Prepared Statement
 * const query = `SELECT * FROM visitor WHERE id = ? `
 * conn.query(query,[id]) -> 배열형태로 작성
 */

// 쿼리문 작성 : 보안에 약함
const allVisitor = async () => {
    const conn = await getConn();
    const query = 'SELECT * FROM visitor';
    const [rows] = await conn.query(query);
    await conn.end();
    return rows;
};

const getVisitor = async (id) => {
    const conn = await getConn();
    // const query = `SELECT * FROM visitor WHERE id = ${id} `;
    const query = 'SELECT * FROM visitor WHERE id=? '; // 보간 방법
    const [rows] = await conn.query(query, [id]);
    await conn.end();
    return rows;
};
const postVisitor = async (body) => {
    const conn = await getConn();
    // 문자열 처리 주의
    // const query = `INSERT INTO visitor(name, comment) VALUES('${body.name}','${body.comment}')`;
    const query = 'INSERT INTO visitor(name, comment) VALUES(?,?)'; // 보간 방법
    const [result] = await conn.query(query, [body.name, body.comment]);
    await conn.end();
    return result;
};

const patchVisitor = async (data) => {
    const conn = await getConn();
    const query = 'UPDATE visitor SET name=?, comment=? WHERE id=?'; // 보간 방법
    const [result] = await conn.query(query, [data.name, data.comment, data.id]);
    await conn.end();
    return result;
};

const deleteVisitor = async (id) => {
    const conn = await getConn();
    const query = 'DELETE FROM visitor WHERE id = ?'; // 보간 방법
    const [result] = await conn.query(query, [id]);
    await conn.end();
    return result;
};

module.exports = { allVisitor, getVisitor, postVisitor, patchVisitor, deleteVisitor };
