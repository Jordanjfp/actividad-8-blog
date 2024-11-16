const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Author = sequelize.define('Author', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    image: { type: DataTypes.TEXT }
}, { timestamps: false });

module.exports = Author;
 
