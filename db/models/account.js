'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  account.init({
    access_token: {
      type: DataTypes.STRING
    },
    expires_at: {
      type: DataTypes.INTEGER
    },
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_token: {
      type: DataTypes.TEXT
    },
    provider: {
      allowNull: false,
      type: DataTypes.STRING
    },
    providerAccountId: {
      allowNull: false,
      type: DataTypes.STRING
    },
    refresh_token: {
      type: DataTypes.STRING
    },
    scope: {
      type: DataTypes.STRING
    },
    session_state: {
      type: DataTypes.STRING
    },
    token_type: {
      type: DataTypes.STRING
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.UUID
    }
  }, {
    sequelize,
    modelName: 'account',
  });
  return account;
};
