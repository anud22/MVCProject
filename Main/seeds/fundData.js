const { Fund } = require('../models');

const fundData = [
  {
    title: 'Blossoming Apricot',
    description: 'LedyX',
    targetVal: 2600,
    category_id: 1,
    imageLink: '01-blossoming-apricot.jpg',
    user_id: 1
  },
  {
    title: 'Cosmos Flowers',
    description: 'WStudio',
    targetVal: 3000,
    category_id: 2,
    imageLink: '02-cosmos-flowers.jpg',
    user_id: 2
  },
  {
    title: 'Sand + Sea = Summer',
    description: 'S_Photo',
    targetVal: 4000,
    category_id: 3,
    imageLink: '03-sand-sea-summer.jpg',
    user_id: 3,
  },
  {
    title: 'Beach Chairs',
    targetVal: 3000,
    category_id: 2,
    imageLink: '04-beach-chairs.jpg',
    user_id: 4,
  },
  {
    title: 'Beach Sunrise',
    targetVal: 2000,
    category_id: 22,
    imageLink: '05-beach-sunrise.jpg',
    user_id: 3,
  }
];

const seedFunds = () => Fund.bulkCreate(fundData);

module.exports = seedFunds;
