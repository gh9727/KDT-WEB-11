'use strict';

const Sequelize = require('sequelize');
// const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

// model
db.Member = require('./User')(sequelize);
// const model = require('./User')
// const temp = model(sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
