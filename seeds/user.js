const { User } = require('../models');

const userData = [
  {
    email: 'test@test.com',
    lastName: 'test',
    firstName: 'li',
    password: 'Mi1234567*'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

const { User } = require('../models');

const userData = [
  {
    email: 'test@test.com',
    lastName: 'test',
    firstName: 'li',
    password: 'Mi1234567*'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
