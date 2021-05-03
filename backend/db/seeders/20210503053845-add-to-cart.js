'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Carts', [
      { user_id: 1, listing_id: 1 },
      { user_id: 1, listing_id: 2 },
      { user_id: 1, listing_id: 3 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Carts', null, {});
  }
};
