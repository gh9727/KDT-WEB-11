const DataTypes = require('sequelize');
/*
 * deifne(테이블명 테이블명 테이블명 테이블명 테이블명 테이블명 테이블명)
 * deifne(테이블명 테이블명 테이블명 테이블명 테이블명 테이블명 테이블명)
 * deifne(테이블명 테이블명 테이블명 테이블명 테이블명 테이블명 테이블명)
 */
const postModel = (sequelize) => {
    return sequelize.define('post', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT('medium'),
        },
    });
};
module.exports = postModel;

/*
 * deifne(테이블명 테이블명 테이블명 테이블명 테이블명 테이블명 테이블명)
 * deifne(테이블명 테이블명 테이블명 테이블명 테이블명 테이블명 테이블명)
 * deifne(테이블명 테이블명 테이블명 테이블명 테이블명 테이블명 테이블명)
 * deifne(테이블명 테이블명 테이블명 테이블명 테이블명 테이블명 테이블명)
 * deifne(테이블명 테이블명 테이블명 테이블명 테이블명 테이블명 테이블명)
 * deifne(테이블명 테이블명 테이블명 테이블명 테이블명 테이블명 테이블명)
 */
