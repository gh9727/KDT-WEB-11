const { DataTypes } = require('sequelize');

// 게시판 속성: id(pk) + title(글 제목) + content(글 내용)
const PostModel = (sequelize) => {
    return sequelize.define('post', {
        //컬럼 정의
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //not null
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        content: DataTypes.TEXT('medium'),
    });
};

module.exports = PostModel;
