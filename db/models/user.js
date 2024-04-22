'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    email: {
      type: DataTypes.STRING,
      unique: "email",
    },
    emailVerified: {
      type: DataTypes.DATE
    },
    image: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
