'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  session.init({
    expires: {
      allowNull: false,
      type: DataTypes.DATE
    },
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    sessionToken: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: "sessionToken"
    },
    userId: {
      type: DataTypes.UUID
    }
  }, {
    sequelize,
    modelName: 'session',
  });
  return session;
};
