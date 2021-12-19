const { DataTypes } = require('sequelize')

//imports
const db = require('../config/db')

//Structure
const Image = db.define('images', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_ip: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    format: {
        type: DataTypes.STRING,
    },
    size: {
        type: DataTypes.NUMBER,
    },
    date: {
        type: DataTypes.DATE,
    },
}, {
    timestamps: false,
})

module.exports = Image