'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    confirmationCode: DataTypes.STRING,
    active: DataTypes.ENUM('Pending', 'Active'),
    passwordResetToken: DataTypes.STRING,
    passwordResetExpire: DataTypes.DATE,
    passwordChangedAt: DataTypes.DATE,
    profile_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};