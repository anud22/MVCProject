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
    donationAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
},
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: false,
        modelName: 'contribution',
    }
)
module.exports = Contribution;