'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.hasMany(models.TimeSlot);
      Schedule.belongsTo(models.Doctor, { foreignKey: 'doctorId' });
      
    }
  }
  Schedule.init(
    {
      workingDay: DataTypes.DATE,
      maxNumber: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      doctorId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Schedule'
    }
  );
  return Schedule;
};
