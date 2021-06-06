'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserRoles', {
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
          as: 'users'
        }
      },
      roleId: {
        type: Sequelize.UUID,
        references: {
          model: 'Roles',
          key: 'id',
          as: 'roles'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserRoles');
  }
};