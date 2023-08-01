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
    createdBy: {
        type: DataTypes.INTEGER,
        /*  references: {
              model: 'user',
              key: 'id',
          },*/
    },
    categoryId:{
        type: DataTypes.INTEGER,
        /*  references: {
              model: 'fundCategory',
              key: 'id',
          },*/
    }
},
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'fund',
    }
)
module.exports = Fund;