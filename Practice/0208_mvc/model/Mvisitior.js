// async ~ await : promise 사용한다!
const mysql = require('mysql2/promise');

const getConn = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'Wale',
        password: 's99h123k123!',
        database: 'kdtdb',
        port: 3306,
    });
};
// 쿼리문 작성 : 보안에 약함

const allVisitor = async () => {
    const conn = await getConn();
    const query = 'SELECT * FROM visitor';
    const [rows] = await conn.query(query);
    await conn.end();
    return rows;
};

const write = async (req) => {
    const conn = await getConn();
    const query = 'INSERT INTO visitor(name, comment) VALUES(?,?)';
    const [rows] = await conn.query(query, [req.name, req.comment]);
    await conn.end();
    return rows;
};

const edit = async (req) => {
    const conn = await getConn();
    const query = 'UPDATE visitor SET name = ?, comment = ? WHERE id = ?';
    const [rows] = await conn.query(query, [req.name, req.comment, req.id]);
    await conn.end();
    return rows;
};

const deleteVisitor = async (id) => {
    const conn = await getConn();
    const query = 'DELETE FROM visitor WHERE id = ?';
    const [rows] = await conn.query(query, [id]);
    await conn.end();
};

module.exports = { allVisitor, write, edit, deleteVisitor };

// 틀린 부분
/*
 * 1. mysql.createConneection({}) 5개의 key가 들어간다.
 * 2. 비동기 메서드 제작 시 return 해야한다.
 */
