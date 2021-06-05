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
      User.hasMany(models.Book, {
        foreignKey: {
          name: 'userId',
          allowNull: false
        },
        as: 'books'
      });
      User.belongsToMany(models.Role, {
        through: "UserRole",
        foreignKey: 'userId',
        as: 'roles'
      });
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Invalid email format.'
        }
      },
      unique: true
    },
    phone: {
      type: DataTypes.STRING
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatarUrl: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'User',
  });
  return User;
};