'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeSlot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TimeSlot.hasMany(models.Booking, {
        foreignKey: 'timeSlotId',
      });
      TimeSlot.belongsTo(models.Schedule, {
        foreignKey: 'scheduleId',
      });
    }
  }
  TimeSlot.init(
    {
      // day ne
      value: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      scheduleId: DataTypes.STRING,
      orderIndex: DataTypes.INTEGER,
      currentNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'TimeSlot',
    }
  );
  return TimeSlot;
};
