'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class verificationToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  verificationToken.init({
    expires: {
      allowNull: false,
      type: DataTypes.DATE
    },
    identifier: {
      allowNull: false,
      type: DataTypes.STRING
    },
    token: {
      primaryKey: true,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'verificationToken',
  });
  return verificationToken;
};
