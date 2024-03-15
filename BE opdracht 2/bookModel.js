const {DataTypes} = require("sequelize");
const {conn} = require('./db');

const bookModel = conn.define('book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    })

module.exports = bookModel;