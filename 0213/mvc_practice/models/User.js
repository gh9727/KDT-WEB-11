const { DataType, DataTypes } = require('sequelize');
// 테이블 정의 : 이게 있어야 코드 입력 가능
// 한 테이블 당 하나의 파일
const UserModel = (sequelize) => {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNULL: false, // NOT NULL
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNULL: false,
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNULL: false,
            },
            name: {
                type: DataTypes.STRING(30),
                allowNULL: false,
            },
        },
        {
            tableName: 'user',
            freezeTableName: true,
            timestamps: false,
        }
    );
};

module.exports = UserModel;
