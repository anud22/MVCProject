const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');

class FundCategory extends Model {

}
FundCategory.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'fundCategory',
    }
)
module.exports = FundCategory;