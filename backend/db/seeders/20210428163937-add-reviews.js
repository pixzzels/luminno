'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      { description: 'I LOVE this necklace!!! It’s so beautiful and the customer service is just as AMAZING!!! Absolutely love love love this!! Everything from the necklace itself to the beautiful and detailed packaging is absolutely gorgeous!!! Thank you so much guys!!', score: 5, user_id: 1, listing_id: 22},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
