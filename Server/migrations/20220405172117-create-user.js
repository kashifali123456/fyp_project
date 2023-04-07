"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        notEmpty: true,
        allowNull: false,
        validate: {
          min: 8,
          max: 24,
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      confirmationCode: {
        type: Sequelize.STRING,
      },
      active: {
        type: Sequelize.ENUM("Pending", "Active"),
        defaultValue: "Pending",
      },
      passwordResetToken: {
        type: Sequelize.STRING,
      },
      passwordResetExpire: {
        type: Sequelize.DATE,
      },
      passwordChangedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
