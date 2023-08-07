const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    // Define fields/columns on model
    // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
    {
      id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Email: {
        type: DataTypes.STRING
      },
      LastName: {
        type: DataTypes.STRING
      },
      FirstName: {
        type: DataTypes.INTEGER
      },
      Password: {
        // Check
        type: DataTypes.INTEGER,
        validate: {
            len: { 
               args: [7, 42],
               msg: "The password length should be between 7 and 42 characters."
            }
         }
      },
      // Will become `is_paperback` in table due to `underscored` flag
      isPaperback: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      // Link to database connection
      sequelize,
      // Set to true to keep `created_at` and `updated_at` fields
      timestamps: true,
    //   freezeTableName: true,
      // `underscored` flag: add underscored field to all attributes
      underscored: true,
      modelName: 'user',
    }
);


module.exports = User;
