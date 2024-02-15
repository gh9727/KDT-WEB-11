const DataTypes = require('sequelize');

// 단수형태 지정해주지 않으면 테이블 복수형태로 생성됨 : members
const MemberModel = (sequelize) => {
    return sequelize.define('member', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
    });
};

module.exports = MemberModel;
