const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');

class Fund extends Model {

}
Fund.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    targetVal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageLink: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'fundCategory',
            key: 'id',
        },
    }
},
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: false,
        modelName: 'fund',
    }
)
module.exports = Fund;