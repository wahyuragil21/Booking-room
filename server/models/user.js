'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type : DataTypes.STRING,
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
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : 'Email is required'
        },
        notEmpty : {
          msg : 'Email is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};