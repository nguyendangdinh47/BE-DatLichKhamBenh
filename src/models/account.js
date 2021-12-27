'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.belongsTo(models.TypeAccount, {
        foreignKey: 'typeAccountId'
      });
      Account.hasOne(models.Admin);
      Account.hasOne(models.Doctor);
      Account.hasOne(models.Patient);
    }
  }
  Account.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      typeAccountId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Account'
    }
  );
  return Account;
};
