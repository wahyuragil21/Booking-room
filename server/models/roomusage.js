'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomUsage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RoomUsage.belongsTo(models.Clients, { foreignKey: 'clientId' })
      RoomUsage.belongsTo(models.Rooms, { foreignKey: 'roomId' })
    }
  }
  RoomUsage.init({
    clientId: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Client Id is reqiured'
        },
        notEmpty : {
          msg : 'Client Id is required'
        }
      }
    },
    roomId: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Room Id is reqiured'
        },
        notEmpty : {
          msg : 'Room Id is required'
        }
      }
    },
    startTime: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Start Time is reqiured'
        },
        notEmpty : {
          msg : 'Start Time is required'
        }
      }
    },
    endTime: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'End Time is reqiured'
        },
        notEmpty : {
          msg : 'End Time is required'
        }
      }
    },
    bookingDate: {
      type : DataTypes.DATE,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Booking Date is reqiured'
        },
        notEmpty : {
          msg : 'Booking Date is required'
        }
      }
    },
    quotaUsed: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Quota is reqiured'
        },
        notEmpty : {
          msg : 'Quota is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'RoomUsage',
  });
  return RoomUsage;
};