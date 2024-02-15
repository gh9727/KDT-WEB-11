require('dotenv').config();

module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.TABLE,
        host: process.env.HOST,
        dialect: process.env.DATABASE,
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
};
