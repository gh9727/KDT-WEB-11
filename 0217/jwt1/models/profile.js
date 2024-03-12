const { DataTypes } = require('sequelize');

// 프로필 속성: id(pk) + 사용자 이름 + 사용자 나이 + 사용자 이메일
const ProfileModel = (sequelize) => {
    return sequelize.define('profile', {
        username: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        age: DataTypes.INTEGER,
        email: DataTypes.STRING,
    });
};

module.exports = ProfileModel;
