const db = require('../utils/database');
const { DataTypes} = require('sequelize');

const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: "false",
    },
    categoriesId: {
        type: DataTypes.INTEGER,
        field: 'categories_id',
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
    }

}, 
{
    timestamps: false,
});

module.exports = Todos;