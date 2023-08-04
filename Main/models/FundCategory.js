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
        allowNull: false,
        validate: {
            len: [1, 8],
        },
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'fundCategory',
    }
)
module.exports = FundCategory;