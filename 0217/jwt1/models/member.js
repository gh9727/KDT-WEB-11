const { DataTypes } = require('sequelize');

// Member 테이블 속성: id(pk) + 사용자 아이디 + 사용자 비밀번호
const MemberModel = (sequelize) => {
    return sequelize.define('member', {
        userId: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

module.exports = MemberModel;
