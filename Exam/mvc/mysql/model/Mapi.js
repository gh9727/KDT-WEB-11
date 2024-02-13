const mysql = require('mysql2/promise');
require('dotenv').config();

// MYSQL 연동
/* createConnection : 단일 연결
 * 요청할때마다 새로운 연결을 생성
 * 각 기능마다 sql을 켜고 꺼줘야함
 * 적은수의 동시연결이나 단순한 DB 쿼리일 때 사용
 */
/* createPool : 다중 연결
 * 연결 풀을 생성
 * 풀 : 미리 정의된 수의 연결을 생성하고 관리해줌
 * 요청이 들어오면 연결 풀에서 사용가능한 연결을 제공
 * 작업완료 후 해당연결을 반환
 * 연결이 필요하지 않을 경우 자동으로 반환, 풀의 연결 수를 제한하고 관리를 최적화
 * 일반적인 웹서비스에 적합
 */
const conn = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    connectionLimit: 15, // 최대 연결 수 : 기본값 = 10
});

// const getConn = async () => {
//     return await mysql.createConnection({});
// };

const login = async () => {
    const query = 'SELECT userid,pw FROM user';
    const [data] = await conn.query(query);
    return data;
};
const register = async (userid, pw, name) => {
    const query = 'INSERT INTO user(userid, pw, name) VALUES(?,?,?)';
    const [data] = await conn.query(query, [userid, pw, name]);
};
const editId = async (newid, pw) => {
    const query = 'UPDATE user SET userid=? WHERE pw=?';
    const [data] = await conn.query(query, [newid, pw]);
};
const editPw = async (id, newPw) => {
    const query = 'UPDATE user SET pw=? WHERE userid=?';
    const [data] = await conn.query(query, [newPw, id]);
};
const deleteUser = async (id) => {
    const query = 'DELETE FROM user WHERE userid=?';
    const [data] = await conn.query(query, [id]);
};
module.exports = { login, register, editId, editPw, deleteUser };

// INSERT : INSERT INTO 테이블(컬럼들) VALUES(투플값들);
