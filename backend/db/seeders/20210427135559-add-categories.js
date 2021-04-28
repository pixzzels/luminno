'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { name: "On Sale" },
      { name: "For MOM" },
      { name: "Necklace" },
      { name: "Ring" },
      { name: "Earrrings" },
      { name: "Bracelet" },
      { name: "Charm | Keychain | Pin" },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
