'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// 모델
db.Post = require('./post')(sequelize);
db.User = require('./user')(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

/* 정리
 * config 변수: 내 DB 연결 데이터
   config(my data) → sequelize(mysql)
 * sequelize 변수: DB 접속
 * require(./post)(sequelize): 테이블 생성 후 db 객체에게 반환
 * 모듈 불러옴과 동시에 함수 호출을 할 수 있다
 */
