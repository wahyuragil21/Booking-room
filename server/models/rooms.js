'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rooms.hasMany(models.RoomUsage, { foreignKey: 'roomId' })
    }
  }
  Rooms.init({
    roomName: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : 'Room Name is required'
        },
        notEmpty : {
          msg : 'Room Name is required'
        }
      }
    },
    costPerHour: {
      type : DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull : {
          msg : 'Cost is required'
        },
        notEmpty : {
          msg : 'Cost is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return Rooms;
};