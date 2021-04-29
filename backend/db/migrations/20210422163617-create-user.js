'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      admin: {
        allowNull: false,
        type: Sequelize.BOOLEAN, 
        defaultValue: false
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(30),
        unique: true,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(256),
        unique: true,
      },
      hashed_password: {
        allowNull: false,
        type: Sequelize.STRING.BINARY,
      },
      profile_img: {
        type: Sequelize.STRING(200)
      },
      funds: {
        allowNull: false,
        type: Sequelize.FLOAT()
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};