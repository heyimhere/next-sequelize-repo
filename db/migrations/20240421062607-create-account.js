'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      access_token: {
        type: Sequelize.STRING
      },
      expires_at: {
        type: Sequelize.INTEGER
      },
      id: {
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_token: {
        type: Sequelize.TEXT
      },
      provider: {
        allowNull: false,
        type: Sequelize.STRING
      },
      providerAccountId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      refresh_token: {
        type: Sequelize.STRING
      },
      scope: {
        type: Sequelize.STRING
      },
      session_state: {
        type: Sequelize.STRING
      },
      token_type: {
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('accounts');
  }
};
