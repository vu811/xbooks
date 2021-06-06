'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {};
  UserRole.init({
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    roleId: {
      type: DataTypes.UUID,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'UserRole',
  });
  return UserRole;
};