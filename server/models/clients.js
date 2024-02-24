'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Clients.hasMany(models.RoomUsage, { foreignKey: 'clientId' })
    }
  }
  Clients.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : 'Name is required'
        },
        notEmpty : {
          msg : 'Name is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : 'Email is required'
        },
        notEmpty : {
          msg : 'Email is required'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : 'Phone is required'
        },
        notEmpty : {
          msg : 'Phone is required'
        }
      }
    },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull : {
          msg : 'Credit is required'
        },
        notEmpty : {
          msg : 'Credit is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : 'Password is required'
        },
        notEmpty : {
          msg : 'Password is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};