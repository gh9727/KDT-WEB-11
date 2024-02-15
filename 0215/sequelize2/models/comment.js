const { DataTypes } = require('sequelize');

const CommentModel = (sequelize) => {
    return sequelize.define('comment', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: DataTypes.TEXT('medium'),
    });
};

module.exports = CommentModel;
