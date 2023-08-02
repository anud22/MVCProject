const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');

class Contribution extends Model {

}
Contribution.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fundId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'fund',
            key: 'id',
        },
    },
    totalMoney: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'contribution',
    }
)
module.exports = Contribution;