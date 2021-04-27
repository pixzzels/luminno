'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@gmail.com',
        username: 'demo',
        funds: 10000,
        profile_img: faker.image.imageUrl(),
        hashed_password: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: 'FakeUser1',
        hashed_password: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: 'FakeUser2',
        hashed_password: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: faker.internet.userName(),
        hashed_password: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: faker.internet.userName(),
        hashed_password: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: faker.internet.userName(),
        hashed_password: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: faker.internet.userName(),
        hashed_password: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: faker.internet.userName(),
        hashed_password: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: faker.internet.userName(),
        hashed_password: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: faker.internet.userName(),
        hashed_password: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: faker.internet.userName(),
        hashed_password: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: faker.internet.userName(),
        hashed_password: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: faker.internet.userName(),
        hashed_password: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        funds: 10000,
        username: faker.internet.userName(),
        hashed_password: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    //   const Op = Sequelize.Op;
    //   return queryInterface.bulkDelete('Users', {
    //     username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    //   }, {});
  }
}