const mysql = require('mysql2');
//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'newkdt',
    password: '1234',
    database: 'kdt11',
    port: 3306,
});
conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('mysql connect');
});
//쿼리문 작성
const allVisitor = (cb) => {
    const query = `SELECT * FROM visitor`;
    conn.query(query, (err, rows) => {
        console.log(rows);
    });
};

module.exports = { allVisitor };
