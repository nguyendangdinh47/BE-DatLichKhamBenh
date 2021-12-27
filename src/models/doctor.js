'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.hasMany(models.Schedule);
      Doctor.hasMany(models.Rate);
      Doctor.belongsTo(models.Position, { foreignKey: 'positionId' });
      Doctor.belongsTo(models.Specialist, { foreignKey: 'specialistId' });
      Doctor.belongsTo(models.Account, { foreignKey: 'accountId' });
    }
  }
  Doctor.init(
    {
      fullName: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      address: DataTypes.STRING,
      date: DataTypes.DATE,
      workHistory: DataTypes.TEXT,
      avatarImage: DataTypes.STRING,
      clinicName: DataTypes.STRING,
      certificateName: DataTypes.STRING,
      licenseName: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      specialistId: DataTypes.INTEGER,
      positionId: DataTypes.INTEGER,
      accountId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Doctor'
    }
  );
  return Doctor;
};
