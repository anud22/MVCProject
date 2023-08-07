const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        // Check
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
              // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
            is:/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/,
            // msg: "The password length should have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
         }
      },
    },
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        },
      },
      // Link to database connection
      sequelize,
      // Set to true to keep `created_at` and `updated_at` fields
      timestamps: true,
      // stop the auto-pluralization performed by Sequelize
      freezeTableName: true,
      // `underscored` flag: add underscored field to all attributes
      underscored: true,
      modelName: 'user',
    }
);


module.exports = User;
